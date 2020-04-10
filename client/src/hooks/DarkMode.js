import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialMode) => {
    const [storedMode, setStoredMode] = useLocalStorage("darkmode", initialMode);

    useEffect(() => {
        const body = document.body;
        if (storedMode) {
            body.classList.add("dark-mode");
        }
        else {
            body.classList.remove("dark-mode");
        }
    },[storedMode]);

    return[storedMode, setStoredMode];
}