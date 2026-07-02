import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig } from "framer-motion";
import { SmoothScrollProvider } from "./lib/SmoothScroll";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <SmoothScrollProvider>
        <App />
      </SmoothScrollProvider>
    </MotionConfig>
  </StrictMode>
);
