import { styled } from "@mui/material/styles";
import { AppBar as MuiAppBar } from "@mui/material";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "transparent", 
  boxShadow: "none",
  marginBottom: '30px', 
  padding: "0px 20%",
  position: "absolute",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

export default AppBar;
