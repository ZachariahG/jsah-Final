
import React from "react";
import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";
import '../components/styles/Home.css'
import MainContentDisplayWindow from "../components/Main-Content-Window";



const HomePage = () => {
    return (
        <div>
            <PageHeader/>
            <h1>Home</h1>
            <br />
            <div className="main-content">
                <MainContentDisplayWindow />
                <MainContentDisplayWindow />
                <MainContentDisplayWindow />
                <MainContentDisplayWindow />
            </div>
            <PageFooter/>
        </div>
    )
};

export default HomePage;

