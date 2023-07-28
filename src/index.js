import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/global";
import AppRouter from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <AppRouter />
    <ToastContainer />
  </React.StrictMode>
);
