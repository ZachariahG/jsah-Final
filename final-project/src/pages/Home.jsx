
import React from "react";
import Header from "../components/PageHeader";
import Footer from "../components/PageFooter";
import '../components/styles/Home.css'
import MainContentDisplayWindow from "../components/Main-Content-Window";


const HomePage = () => {
    return (
        <div>
            <Header/>
            <h1>Home</h1>
            <br />
            <div className="main-content">
                <MainContentDisplayWindow />
                <MainContentDisplayWindow />
                <MainContentDisplayWindow />
            </div>
            <Footer/>
        </div>
    )
};

export default HomePage;

