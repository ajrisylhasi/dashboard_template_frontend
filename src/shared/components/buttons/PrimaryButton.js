import { Button, styled } from "@mui/material";

const PrimaryButton = styled(Button)(() => ({
    minWidth: "31px", 
    minHeight: "31px", 
    color: "primary",
    borderRadius: "15px", 
    padding: "1px 5px",
}));

export default PrimaryButton;