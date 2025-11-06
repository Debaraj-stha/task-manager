import { createContext, useContext } from "react";

interface ThemeContextValues {
    theme:string,
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValues | null>(null);

const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error("useTheme must be within ThemeProvider")
    }
    return context
}

export{
    ThemeContext,
    useTheme
}