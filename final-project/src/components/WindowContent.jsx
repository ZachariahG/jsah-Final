import React, { useState, useEffect } from "react";
import axios from 'axios';


function GameContent() {
    const [gameData, setGameData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://api.twitch.tv/helix/games/top', {
                    params: {
                        'id': '141981764',
                    },
                    headers: {
                        'Authorization': `Bearer ${import.meta.env.VITE_REACT_APP_TWITCH_API_TOKEN}`,  // Use env variable for API token
                        'Client-Id': import.meta.env.VITE_REACT_APP_TWITCH_CLIENT_ID,  // Use env variable for Client ID
                    }
                });
                setGameData(response.data);
            } catch (error) {
                console.error('Error fetching Twitch data:', error);
            }
        }

        fetchData();
    }, []);

    // If data is still loading, show a loading state
    if (!gameData) {
        return <div>Loading...</div>;
    }

    // Game Info
    return (
        <div className="content-body">
             <div className="content-main">
             <h1>{gameData.data[0]?.name || "Game Title Goes Here"}</h1>
             <p>{gameData.box_art_url}</p>

            </div>

            <div className="content-details">
                <div className="content-summary">
                    
                </div>

                <div className="content-price">
                    
                </div>
            </div>
        </div>
    );
}

export default GameContent;