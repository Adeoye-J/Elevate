import React, {useState, useEffect} from 'react'
import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleTheme = () => {

    // State to track theme
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("isDark") || false);

    // Function to toggle theme
    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
        localStorage.setItem("isDark", isDarkMode)
    };

    // Effect to apply the theme on body class
    useEffect(() => {
        if (isDarkMode) {
        document.body.classList.add('dark-mode');
        } else {
        document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    
    return (
        <div className='toggle-theme-container'>
            <button onClick={toggleTheme} className="theme-toggle-btn">
                {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
        </div>
    )
}

export default ToggleTheme