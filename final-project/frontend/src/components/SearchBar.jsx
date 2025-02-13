import React, { useState, useEffect } from "react";

import axios from "axios";

const CLIENT_ID = import.meta.env.VITE_REACT_APP_TWITCH_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_REACT_APP_TWITCH_API_TOKEN;

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [accessToken, setAccessToken] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.post(
          "https://id.twitch.tv/oauth2/token",
          null,
          {
            params: {
              client_id: CLIENT_ID,
              client_secret: CLIENT_SECRET,
              grant_type: "client_credentials",
            },
          }
        );
        setAccessToken(response.data.access_token);
      } catch (error) {
        console.error("Error fetching access token:", error);
        setError("Failed to fetch access token.");
      }
    };

    fetchToken();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!accessToken) {
      setError("Access token not available yet.");
      return;
    }

    try {
      const response = await axios.get(
        "https://api.twitch.tv/helix/search/categories",
        {
          headers: {
            "Client-Id": CLIENT_ID,
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            query: query,
            first: 5,
          },
        }
      );

      if (response.data.data.length > 0) {
        setResults(response.data.data);
      } else {
        setError("No results found.");
      }
    } catch (error) {
      console.error("Error fetching game data:", error);
      setError("Please enter the name of a game.");
    }
  };

  return (
    <div className="search-bar-parent">
      <input
        type="text"
        maxLength={40}
        placeholder="Search for a Game..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {results.map((game) => (
          <li key={game.id}>
            <p>{game.name}</p>
            <img
              src={
                game.box_art_url?.replace("{width}x{height}", "200x250") ||
                "default-image.jpg"
              }
              alt={game.name}
            />

            <a
              style={{ color: "red", fontSize: "25px" }}
              href={`https://igdb.com/games/${game.name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on IGBD
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
