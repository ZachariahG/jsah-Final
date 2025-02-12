import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./buttons/Add-To-Cart-Button";
import "./styles/Content-Window.css";
import TwitchRandomStreamer from "./Streamer-Content";

function MainContentDisplayWindow() {
  const [gameData, setGameData] = useState(null);

  // If data is still loading, show a loading state
  if (!gameData) {
    return (
      <div className="content-body">
        <div className="content-title">
          <TwitchRandomStreamer />
        </div>

        <div className="merch-main">
          <div className="content-buttons">
            <ProductList />
            <div className="save-for-later-button">Save for later button</div>
            <div className="remove-from-cart-button">
              Remove from cart button
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Assuming you get some data from Twitch API, here's an example rendering
  return (
    <div className="content-body">
      <div className="content-title">
        {/* <h2>{gameData.data[0]?.display_name || "Game Title Goes Here"}</h2> Display name from Twitch API */}
      </div>

      <div className="content-buttons">
        <ProductList />
        <div className="save-for-later-button">Save for later button</div>
        <div className="remove-from-cart-button">Remove from cart button</div>
    
      </div>
    </div>
  );
}

export default MainContentDisplayWindow;
