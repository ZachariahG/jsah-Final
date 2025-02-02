
import React from "react";
import './styles/PageFooter.css';

function PageFooter () {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()}</p>
            <p>Privacy Policy</p>
            <p>Legal</p>
            <p>Cookies</p>
            <p>Support</p>
        </footer>
    )
}

export default PageFooter;



