// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import './styles/Streamer-Content.css';
 
// // Retrieve Twitch API client ID and secret from environment variables
// const CLIENT_ID = import.meta.env.VITE_REACT_APP_TWITCH_CLIENT_ID;
// const CLIENT_SECRET = import.meta.env.VITE_REACT_APP_TWITCH_API_TOKEN;
 
// const TwitchRandomStreamer = () => {
//   const [accessToken, setAccessToken] = useState(null);
//   const [randomStreamer, setRandomStreamer] = useState(null);
//   const [randomVideo, setRandomVideo] = useState(null);
//   const [error, setError] = useState(null);
 
//   useEffect(() => {
//     const fetchToken = async () => {
//       try {
//         const response = await axios.post("https://id.twitch.tv/oauth2/token", null, {
//           params: {
//             client_id: CLIENT_ID,
//             client_secret: CLIENT_SECRET,
//             grant_type: "client_credentials",
//           },
//         });
//         setAccessToken(response.data.access_token);
//       } catch (error) {
//         console.error("Error fetching access token:", error);
//         setError(prev => prev ? prev + " | Failed to fetch access token." : "Failed to fetch access token.");
//       }
//     };
 
//     fetchToken();
//   }, [CLIENT_ID, CLIENT_SECRET]);
 
 
//   const fetchRandomStreamer = async () => {
//     if (!accessToken) {
//       setError("Access token not available yet.");
//       return;
//     }
 
//     try {
//       const response = await axios.get("https://api.twitch.tv/helix/streams", {
//         headers: {
//           "Client-Id": CLIENT_ID, 
//           Authorization: `Bearer ${accessToken}`,
//         },
//         params: { first: 1 },
//       });
 
//       if (response.data.data.length > 0) {
//         const randomPick = response.data.data[Math.floor(Math.random() * response.data.data.length)];
//         setRandomStreamer(randomPick);
//         fetchStreamerVideos(randomPick.user_id);
//       } else {
//         setError(prev => prev ? prev + " | No live streamers found." : "No live streamers found.");
//       }
//     } catch (error) {
//       console.error("Error fetching streamers:", error);
//       setError(prev => prev ? prev + " | Failed to fetch streamers." : "Failed to fetch streamers.");
//     }
//   };
 
 
//   const fetchStreamerVideos = async (userId) => {
//     if (!accessToken) {
//       console.error("Access token is not ready yet.");
//       return;
//     }
 
//     try {
//       const response = await axios.get("https://api.twitch.tv/helix/videos", {
//         headers: {
//           "Client-Id": CLIENT_ID,
//           Authorization: `Bearer ${accessToken}`,
//         },
//         params: { user_id: userId, first: 10 },
//       });
 
//       if (response.data.data.length > 0) {
//         const randomVideo = response.data.data[Math.floor(Math.random() * response.data.data.length)];
//         setRandomVideo(randomVideo);
//       } else {
//         setError(prev => prev ? prev + " | No videos found." : "No videos found.");
//       }
//     } catch (error) {
//       console.error("Error fetching videos:", error);
//       setError(prev => prev ? prev + " | Failed to fetch videos." : "Failed to fetch videos.");
//     }
//   };
 
//   return (
//     <div className="p-6 bg-gray-900 text-white">
//         <h1> Watch Live </h1>
//         <button onClick={fetchRandomStreamer} className="random-streamer-button">
//           Get Random Streamer
//         </button>
//         {error && <p style={{ color: "red" }}>{error}</p>}
//         {randomStreamer && (
//           <div className="stream">
//             <iframe 
//               className="live-preview"
//               src={`https://player.twitch.tv/?channel=${randomStreamer.user_name}&parent=localhost`}
//               width="500"
//               height="500"
//               frameBorder="5"
//               allowFullScreen
//             ></iframe>
//             <h2>{randomStreamer.user_name}</h2>
//             <p>Currently streaming: {randomStreamer.game_name}</p>
//             <p>Viewers: {randomStreamer.viewer_count}</p>
//           </div>
//         )}
//     </div>
//   );
// };
 
// export default TwitchRandomStreamer;

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
  }, []); 
 
  const handleSearch = async (e) => {
    e.preventDefault();
 
    if (!accessToken) {
      setError("Access token not available yet.");
      return;
    }
 
    try {
      const response = await axios.get("https://api.twitch.tv/helix/search/categories", {
        headers: {
          "Client-Id": CLIENT_ID,
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          query: query, 
          first: 5, 
        },
      });
 
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
              src={game.box_art_url?.replace("{width}x{height}", "200x250") || "default-image.jpg"} 
              alt={game.name} 
            />
            {/* fix link to game below */}
            {/* <a 
              href={`https://igdb.com/${game.name}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View on IGBD
            </a> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default SearchBar;