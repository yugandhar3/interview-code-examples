import React, { useEffect, useState } from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setToggle(!toggle)
        }, 5000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    const handleChangeToggle = () => {
        setToggle(!toggle)
    }

    return <ThemeContext.Provider value={{ toggle, handleChangeToggle }}>
        {children}
    </ThemeContext.Provider>
}