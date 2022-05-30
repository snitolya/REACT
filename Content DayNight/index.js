import React from "react";
import ReactDOM from 'react-dom/client';
import { ThemeContextProvider } from "./themeContext";
import './index.css';

import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);