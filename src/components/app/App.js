import {
  BrowserRouter as Router,
  // Navigate,
  Route,
  Routes,
} from "react-router-dom";
import React from "react";
import { ThemeProvider } from "@mui/material";
import Provider from "components/provider/Provider";
import Login from "pages/auth/Login";
import Register from "pages/auth/Register";
import Home from "pages/Home";
import Layout from "components/layout/Layout";
import generalTheme from "theme";
import SignalHandler from "components/layout/SignalHandler";

const App = () => (
  <Provider>
    <ThemeProvider theme={generalTheme}>
        <SignalHandler />
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/feed/*" element={<Layout />} />
          </Routes>
        </Router>
    </ThemeProvider>
  </Provider>
);

export default App;
