import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Index from "./Index.jsx";
import "./styles/index.css";
import MainLayout from "./layouts/MainLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainLayout>
      <Index />
    </MainLayout>
  </StrictMode>
);
