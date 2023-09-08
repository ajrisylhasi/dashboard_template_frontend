import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import React from "react";
import { ThemeProvider } from "@mui/material";
import Provider from "components/provider/Provider";
import Login from "components/login/Login";
import Register from "components/register/Register";
import Layout from "components/layout/Layout";
import generalTheme from "theme";
import SignalHandler from "components/layout/SignalHandler";
import Products from "pages/Products";
import Orders from "pages/Orders";
import Stock from "pages/Stock";

const App = () => (
  <Provider>
    <ThemeProvider theme={generalTheme}>
      <SignalHandler />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route
            path="/products/*"
            element={<Layout childElement={<Products />} path="products" />}
          />
          <Route
            path="/orders/*"
            element={<Layout childElement={<Orders />} path="orders" />}
          />
          <Route
            path="/stock/*"
            element={<Layout childElement={<Stock />} path="stock" />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </Provider>
);

export default App;
