import React from "react";
import { useDarkMode } from '../hooks/DarkMode';
import '../index.css';

const NavBar = () => {
    //Implementing dark mode in NavBar
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleDarkMode = e => {
        //stop refresh
        e.preventDefault();
        setDarkMode(!darkMode);
    }
//format for the navBar with dark mode and the title
    return (
        <div>
            <div className="dark-mode-toggle">
                <div/>
                <button
                onClick={toggleDarkMode}
                className={ darkMode ? "toggle toggled" : "toggle"}
                data-testid="darkToggleButton">Dark Mode</button>
            </div>
            <h2 className="title">Player Cards</h2>
        </div>
    )
}
export default NavBar;