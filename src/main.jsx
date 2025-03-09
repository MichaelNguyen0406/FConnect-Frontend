import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import ThemeContext from "./context/ThemeContext.jsx";
import AuthProvider from "./context/AuthContext.jsx";
import { WebSocketProvider } from "./context/WebSocketContext.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <ThemeContext>
      <Provider store={store}>
        <AuthProvider>
          <WebSocketProvider>
            <App />
          </WebSocketProvider>
        </AuthProvider>
      </Provider>
    </ThemeContext>
  </BrowserRouter>
  // </StrictMode>
);
