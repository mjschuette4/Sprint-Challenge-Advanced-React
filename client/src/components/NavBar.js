import React from "react";
import { useDarkMode } from '../hooks/DarkMode';
import '../index.css';

const NavBar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleDarkMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }

    return (
        <div>
            <div className="dark-mode-toggle">
                <div
                    
                />
                <button
                onClick={toggleDarkMode}
                className={ darkMode ? "toggle toggled" : "toggle"}
                data-testid="darkToggleButton">Dark Mode</button>
            </div>
            <h2>Player Cards</h2>
        </div>
    )
}
export default NavBar;