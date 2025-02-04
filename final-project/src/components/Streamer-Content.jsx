import React, { useState, useEffect } from "react";
import axios from "axios";
import './styles/Streamer-Content.css';

// Retrieve Twitch API client ID and secret from environment variables
const CLIENT_ID = import.meta.env.VITE_REACT_APP_TWITCH_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_REACT_APP_TWITCH_API_TOKEN;

const TwitchRandomStreamer = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [randomStreamer, setRandomStreamer] = useState(null);
  const [randomVideo, setRandomVideo] = useState(null);
  const [error, setError] = useState(null);

  // Fetch the OAuth token on component mount
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

  // Fetch a random streamer
  const fetchRandomStreamer = async () => {
    if (!accessToken) return;

    try {
      const response = await axios.get("https://api.twitch.tv/helix/streams", {
        headers: {
          "Client-ID": CLIENT_ID,
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          first: 1, // Get 1 live streamer
        },
      });

      if (response.data.data.length > 0) {
        const randomPick = response.data.data[Math.floor(Math.random() * response.data.data.length)];
        setRandomStreamer(randomPick);
        fetchStreamerVideos(randomPick.user_id);
      } else {
        setError("No live streamers found.");
      }
    } catch (error) {
      console.error("Error fetching streamers:", error);
      setError("Failed to fetch streamers.");
    }
  };

  // Fetch random video for the selected streamer
  const fetchStreamerVideos = async (userId) => {
    try {
      const response = await axios.get("https://api.twitch.tv/helix/videos", {
        headers: {
          "Client-ID": CLIENT_ID,
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          user_id: userId,
          first: 10, // Fetch 10 latest videos
        },
      });

      if (response.data.data.length > 0) {
        const randomVideo = response.data.data[Math.floor(Math.random() * response.data.data.length)];
        setRandomVideo(randomVideo);
      } else {
        setError("No videos found for this streamer.");
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
      setError("Failed to fetch videos.");
    }
  };

  // Function to get the valid thumbnail URL by replacing placeholder with actual resolution
  const getThumbnailUrl = (url) => {
    if (!url) return "path/to/default-thumbnail.jpg"; // Fallback image if no URL
    return url.replace("{width}x{height}", "320x180"); // Replace with desired resolution
  };

  return (
    <div className="p-6 bg-gray-900 text-white">
        <h1> Watch Live </h1>

        <button
        onClick={fetchRandomStreamer}
        className="random-streamer-button"
        >
        Get Random Streamer
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {randomStreamer && (
        <div className="stream">
            <div className="live-preview"
            src={getThumbnailUrl(randomStreamer.thumbnail_url)}
            width="500"
            height="500"
            frameBorder="5"
            allowFullScreen
            >

            </div>

            <h2 className="text-xl font-semibold">{randomStreamer.user_name}</h2>
            <p>Currently streaming: {randomStreamer.game_name}</p>
            <p>Viewers: {randomStreamer.viewer_count}</p>
            <a
            href={`https://www.twitch.tv/${randomStreamer.user_name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 underline"
            >
            Watch Stream
            </a>
        </div>
      )}

      {randomVideo && (
        <div className="mt-6 border p-4 rounded-lg bg-gray-800">
          <h2> Random Video</h2>
          <p>{randomVideo.title}</p>
          <img
            src={getThumbnailUrl(randomVideo.thumbnail_url)} // Get the thumbnail URL
            alt="Twitch Video Thumbnail"
            className="rounded-lg"
          />
          <a
            href={randomVideo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 underline mt-2 block"
          >
            Watch Video
          </a>
        </div>
      )}
    </div>
  );
};

export default TwitchRandomStreamer;
