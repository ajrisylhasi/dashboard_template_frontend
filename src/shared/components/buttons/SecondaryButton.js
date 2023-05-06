import { Button, styled } from "@mui/material";
import theme from "theme"

const SecondaryButton = styled(Button)(() => ({
  minWidth: "31px", 
  minHeight: "31px", 
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
  borderRadius: "15px", 
  padding: "1px 0px 0px 0px",
}));

export default SecondaryButton;