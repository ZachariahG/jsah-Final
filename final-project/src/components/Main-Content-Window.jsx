import React, { useState, useEffect } from "react";
import axios from 'axios';
import ProductList from "./buttons/Add-To-Cart-Button";
import './styles/Content-Window.css';
import TwitchRandomStreamer from "./Streamer-Content";



function MainContentDisplayWindow() {
    const [gameData, setGameData] = useState(null);

    
    if (!gameData) {
        return <div className="content-body">
        <div className="content-title">
            <TwitchRandomStreamer/>
            
        </div>

        <div className="merch-main">
            <div className="content-buttons">
                <ProductList />
            </div>
        </div>
        
    </div>;
    }

    // Assuming you get some data from Twitch API, here's an example rendering
    return (
        <div className="content-body">
            <div className="content-buttons">
                <ProductList />
            </div>
        </div>
    );
}

export default MainContentDisplayWindow;