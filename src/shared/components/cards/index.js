import React from "react";
import { Card as MuiCard, Button, styled, Box, Chip, Typography} from "@mui/material";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import theme from "theme"

const StyledCard = styled(MuiCard)(() => ({
  borderRadius: "15px",
  margin: "12px",
  position: "relative",
  height: "calc(100% - 24px)",
  boxShadow: "-5px 5px 8px 1px rgba(0,0,0,0.3)",
  backgroundImage: "url(https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d3c3b295-ab3f-4836-bae2-62020ff63f13/blazer-mid-77-vintage-mens-shoes-nw30B2.png)", backgroundSize: "cover", backgroundPosition: "50% 50%"
}));

const Card = () => (
  <StyledCard>
    <Box height="100%">
      <Chip sx={{ position: "absolute", top: "15px", width: "auto", height: "31px", left: "15px", borderRadius: "15px", textTransform: "unset", backgroundColor: "#fff", color: theme.palette.info.main, fontSize: "16px", fontFamily: "Red Hat Display", boxShadow: "-3px 3px 8px -2px rgba(0,0,0,0.39)" }} label={<Typography sx={{ fontFamily: "Red Hat Display" }}>7129<sup>.00€</sup></Typography>} />
      <Button variant="contained" color="error" size="small" sx={{ position: "absolute", top: "15px", minWidth: "31px", minHeight: "31px", right: "15px", borderRadius: "15px", padding: "1px 0px 0px 0px" }}><FavoriteBorderOutlinedIcon sx={{ fontSize: "21px" }} color="white"/></Button>
      <Button variant="contained" size="small" sx={{ position: "absolute", bottom: "15px", minWidth: "31px", minHeight: "31px", right: "100px", borderRadius: "15px", padding: "0px 0px 2px 0px" }}><ShoppingBagOutlinedIcon sx={{ width: "20px" }} color="white"/></Button>
      <Button variant="contained" size="small" sx={{ position: "absolute", bottom: "15px", minWidth: "70px", right: "15px", borderRadius: "15px", textTransform: "unset" }}>Blej tani!</Button>
    </Box>
  </StyledCard>
);
export default Card;
