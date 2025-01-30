import React from "react";
import NavBar from "../components/NavBar";
import Header from "../components/PageHeader";
import Footer from "../components/PageFooter";


const HomePage = () => {
    return (
        <div>
            <Header/>
            <br />
            
            <h1>It's GAME TIME</h1>

            <div className="page-body">
                <div className="game-main">
                    <div className="game-display-window">Game-display</div>
                    <div className="game-display-window">Game-display</div>
                    <div className="game-display-window">Game-display</div>
                </div>
                <div className="recently-purchased-main">
                    <div className="recently-purchased-window">recently-purchased-display</div>
                    <div className="recently-purchased-window">recently-purchased-display</div>
                    <div className="recently-purchased-window">recently-purchased-display</div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default HomePage;

