import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// inde i main.tsx "pakker" vi vores App ind i vores nye context
// - nu kan alle children af App tilgå vores fra context

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
