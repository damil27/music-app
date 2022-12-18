import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { red, yellow } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: { main: yellow[700] },
    // mode: "dark",
    secondary: red,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
