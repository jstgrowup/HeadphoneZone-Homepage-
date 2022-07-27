import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import AppContextProviderComponent from "./TheProdList/AppContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <AppContextProviderComponent>
          <App />
        </AppContextProviderComponent>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
