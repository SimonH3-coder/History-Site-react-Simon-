import { ByDate } from "./pages/Date/date";
import { Since } from "./pages/since/since";
import { ToDay } from "./pages/toDay/today";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";
import "./App.css";
// import { MainPage } from "./layouts/Mainpage";

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
          <Route path="/byDate" element={<ByDate />} />
          <Route index element={<ToDay />} />
          <Route path="/Since" element={<Since />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
