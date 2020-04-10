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
            <div>
                <div
                    onClick={toggleDarkMode}
                    className={ darkMode ? "toggle toggled" : "toggle"}
                    data-testid="darkToggleButton"
                />
                <h3>Dark Mode</h3>
            </div>
            <h2>Player Cards</h2>
        </div>
    )
}
export default NavBar;