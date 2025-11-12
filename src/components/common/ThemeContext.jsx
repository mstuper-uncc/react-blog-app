import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
        const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme : 'light';
    });

    const toggleTheme = () => { setTheme((t) => (t === 'light' ? 'dark' : 'light'));
    };

        useEffect(() => {
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            document.body.style.backgroundColor = '#121212';
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        } else {
            document.body.style.backgroundColor = '#ffffff';
            document.body.style.color = '#000000';
            document.body.classList.add('light');
            document.body.classList.remove('dark');
        }
    }, [theme]);


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
    );
}