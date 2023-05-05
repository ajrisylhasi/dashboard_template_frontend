import { Container, styled } from "@mui/material";
import theme from "theme";

const FullContainer = styled(Container)(() => ({
  [theme.breakpoints.up("sm")]: {
    paddingLeft: 0,
    paddingRight: 0,
    margin: "auto"
  },
  height: "calc(88vh)",
  position: "relative"
}));

export default FullContainer;