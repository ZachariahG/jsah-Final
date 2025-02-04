import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const CLIENT_ID = import.meta.env.VITE_REACT_APP_TWITCH_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_REACT_APP_TWITCH_API_TOKEN;


function SearchBar() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [accessToken, setAccessToken] = useState(null);
    
    const games = query;
    
    useEffect(() => {
        const fetchToken = async () => {
          try {
            const response = await axios.post("https://id.twitch.tv/oauth2/token", null, {
              params: {
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                grant_type: "client_credentials",
              },
            });
            setAccessToken(response.data.access_token);
          } catch (error) {
            console.error("Error fetching access token:", error);
            setError("Failed to fetch access token.");
          }
        };
    
        fetchToken();
      },);

    const handleSearch = () => {
        e.preventDefault();
        axios.get(`https://api.twitch.tv/helix/games?name=${query}`,
            {
                headers: {
                  "Client-ID": CLIENT_ID,
                  Authorization: `Bearer ${accessToken}`,
                },
                params: {
                  first: 1, //get 1 result
                },})

        .then((res) => setResults(res.data.games))
        .catch((err) => console.error('No results found:', err))
    };
 
    return (
        <div>
        <input 
        type="text" maxLength={40}
        placeholder="Search for A Game..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        />
        
        <button onClick={handleSearch}>Search</button>

        <ul> 
    
                    <li key={games.id}>
                        {games.name}
                        {games.box_art_url || "Image Unavailable"}
                    {<Link to={`https://igbd.com/${games.name}`} />}</li>
        
            
        </ul>
        </div>
    )
    
};

export default SearchBar; 