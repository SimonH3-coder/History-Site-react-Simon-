import { Home } from "./pages/home/home";
import { ByDate } from "./pages/Date/date";
import { Since } from "./pages/since/since";
import { ToDay } from "./pages/toDay/today";
import { Navbar } from "./components/Navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
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
    </>
  );
}

export default App;
