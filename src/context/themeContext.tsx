import { themeContext } from "./context/themecontext";
import { createContext, useState, ReactNode } from "react";

// Her laves vores context
interface ThemeContextType {
  isDarkMode: boolean;
  changeTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>(undefined!);

// Her laves vores provider der skal holde alle de states vi vil dele
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // funktion til at skifte staten
  const changeTheme = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  };

  // returner  en provider med de values vi vil dele
  return <ThemeContext.Provider value={{ isDarkMode, changeTheme }}>{children}</ThemeContext.Provider>;
};
