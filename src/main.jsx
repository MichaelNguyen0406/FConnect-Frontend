import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import ThemeContext from "./context/ThemeContext.jsx";
import AuthProvider from "./context/AuthContext.jsx";
import { WebSocketProvider } from "./context/WebSocketContext.jsx";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <ThemeContext>
      <AuthProvider>
        <WebSocketProvider>
          <App />
        </WebSocketProvider>
      </AuthProvider>
    </ThemeContext>
  </BrowserRouter>
  // </StrictMode>
);
