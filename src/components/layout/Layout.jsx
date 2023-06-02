import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  useNavigate
} from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import FullContainer from "shared/components/containers";
import Header from "components/layout/navigation/Header";

const Layout = ({childElement, path}) => {
  const navigate = useNavigate();
  const [cookies] = useCookies(["auth"]);

  useEffect(() => {
    if (cookies.id) {
      axios.defaults.headers.common.Authorization = cookies.id;
      navigate(`/${path}`);
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? "#e7f4e6"
              : theme.palette.grey[900],
          flexGrow: 1,
          overflow: "auto"
        }}
      >
        <Toolbar />
        <FullContainer sx={{ mb: 4, 
          display: "flex", 
          justifyContent: "center"}}>
            {childElement}
        </FullContainer>
      </Box>
    </Box>
  );
};

Layout.propTypes = {
  childElement: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired
}

export default Layout;
