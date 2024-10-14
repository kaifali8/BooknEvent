import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./context/context.jsx";
import { UserProvider } from "./UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContextProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </AppContextProvider>
  </BrowserRouter>
);
