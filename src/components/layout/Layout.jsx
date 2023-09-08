import React, { useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Container, Toolbar } from "@mui/material";
// import { storeContext } from "../provider/Provider";
// import { authActions } from "../../store/auth-reducer";
import Sidebar from "./Sidebar";

const Layout = ({ childElement, path }) => {
  const navigate = useNavigate();
  // const { dispatch } = React.useContext(storeContext);
  const [cookies] = useCookies(["auth"]);

  // const getData = () => {
  //   dispatch({
  //     type: authActions.AUTH_SET_ALL,
  //     payload: {
  //       user: { name: "Ajri Sylhasi", email: "ajrisylhasi@gmail.com" },
  //     },
  //   });
  // };

  useEffect(() => {
    if (cookies.id) {
      axios.defaults.headers.common.Authorization = `Bearer ${cookies.id}`;
      // getData();
      navigate(`/${path}`);
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <CssBaseline />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "auto",
          width: "100%",
        }}
      >
        <Toolbar />
        <Container
          maxWidth="xl"
          sx={{ px: "40px", display: "flex", justifyContent: "center" }}
        >
          {childElement}
        </Container>
      </Box>
    </Box>
  );
};

Layout.propTypes = {
  childElement: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
};

export default Layout;
