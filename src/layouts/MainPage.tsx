import { useState } from "react";
import { MainPage } from "../layouts/Mainpage";

export const MainPage = () => {
  // Her indsættes vore state til at undersøge om isDarkMode er true eller false
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  // funktion til at skifte staten
  const changeTheme = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  };

  // Returner button som skifter når isDarkMode er true eller false
  return (
    <button onClick={() => changeTheme()} className={isDarkMode ? style.dark : style.light}>
      Click me
    </button>
  );
};
