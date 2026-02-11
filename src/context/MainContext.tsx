import { useContext } from "react";
import { ThemeContext } from "../context/themecontext";
import style from "./MainContect.module.scss";

export const MainPage: React.FC () => {

// Her kan vi nu importere vores states og funktioner til at opdatere states
const { changeTheme, isDarkMode } = useContext(ThemeContext);

return (
    <button
    onClick ={() => changeTheme()}
    className={isDarkMode ? style.dark : style.light}
    >
        Click me
    </button>
);
};

