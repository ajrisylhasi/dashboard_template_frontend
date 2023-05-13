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
import Landing from "pages/Landing";
import Layout from "components/layout/Layout";
import generalTheme from "theme";
import SignalHandler from "components/layout/SignalHandler";
import Feed from "pages/feed/Feed";
import Store1 from "pages/stores/Store1";
import Store2 from "pages/stores/Store2";
import Store3 from "pages/stores/Store3";

const App = () => (
  <Provider>
    <ThemeProvider theme={generalTheme}>
        <SignalHandler />
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/feed/*" element={<Layout childElement={<Feed />} path="feed" />} />
            <Route path="/urban-heart/*" element={<Layout childElement={<Store1 />} path="urban-heart" />} />
            <Route path="/couture-by-hana/*" element={<Layout childElement={<Store2 />} path="couture-by-hana" />} />
            <Route path="/mommy-&-me/*" element={<Layout childElement={<Store3 />} path="mommy-&-me" />} />
            <Route path="//*" element={<Layout childElement={<Store1 />} path="" />} />
          </Routes>
        </Router>
    </ThemeProvider>
  </Provider>
);

export default App;
