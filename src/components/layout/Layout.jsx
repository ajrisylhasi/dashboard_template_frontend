import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import FullContainer from "shared/components/containers";
import Sidebar from "components/layout/navigation/Sidebar";
import Feed from "pages/feed/Feed";

const Layout = () => {
  const navigate = useNavigate();
  const [cookies] = useCookies(["auth"]);

  useEffect(() => {
    if (cookies.id) {
      axios.defaults.headers.common.Authorization = cookies.id;
      navigate("/feed");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          overflow: "auto"
        }}
      >
        <Toolbar sx={{ height: '12vh' }}/>
        <FullContainer sx={{ mt: 2, mb: 4, 
          display: "flex", 
          justifyContent: "center"}}>
          <Feed />
        </FullContainer>
      </Box>
    </Box>
  );
};

export default Layout;
