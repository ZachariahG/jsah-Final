

import React, { useState, useEffect } from "react";
import axios from 'axios';


function MainContentDisplayWindow() {
    const [gameData, setGameData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://api.twitch.tv/helix/users', {
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

    // Assuming you get some data from Twitch API, here's an example rendering
    return (
        <div className="content-body">
            <div className="content-title">
                <h1>{gameData.data[0]?.display_name || "Game Title Goes Here"}</h1> {/* Display name from Twitch API */}
            </div>

            <div className="content-main">
                <h1>Game Img Goes Here</h1> 
            </div>

            <div className="content-details">
                <div className="content-summary">
                    
                </div>

                <div className="content-price">
                    
                </div>
            </div>

            <div className="content-buttons">
                <div className="add-to-cart-button">Add to cart button</div>
                <div className="save-for-later-button">Save for later button</div>
                <div className="remove-from-cart-button">Remove from cart button</div>
            </div>
        </div>
    );
}

export default MainContentDisplayWindow;
