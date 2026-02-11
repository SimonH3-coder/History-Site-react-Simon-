import { Home } from "./pages/home/home";
import { ByDate } from "./pages/Date/date";
import { Since } from "./pages/since/since";
import { ToDay } from "./pages/toDay/today";
import { Navbar } from "./components/Navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";
import "./App.css";
import { MainPage } from "./layouts/Mainpage";

export function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  // funktion til at skifte staten
  const changeTheme = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/byDate" element={<ByDate />} />
          <Route path="/Since" element={<Since />} />
          <Route path="/ToDay" element={<ToDay />} />
        </Routes>
      </BrowserRouter>
      <MainPage isDarkMode={isDarkMode} changeTheme={changeTheme} />;
    </>
  );
}

export default App;
