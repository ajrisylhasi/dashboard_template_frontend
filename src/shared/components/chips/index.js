import { Chip as MuiChip, styled } from "@mui/material";
import theme from "theme";

const Chip = styled(MuiChip)(() => ({
	height: "40px", 
    borderRadius: "15px", 
    backgroundColor: "#fff", 
    color: theme.palette.info.main,
    textTransform: "unset",
    fontSize: "16px", 
    fontFamily: "Red Hat Display", 
    boxShadow: "-3px 3px 8px -2px rgba(0,0,0,0.39)",
    '& .MuiChip-label': {
        width: "100%"
    },
}));

export default Chip;