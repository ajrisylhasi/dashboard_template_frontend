import React from "react";
import { Card as MuiCard, styled, Box, Chip, Typography} from "@mui/material";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import theme from "theme";
import PropTypes from "prop-types";
import SecondaryButton from "shared/components/buttons/SecondaryButton";
import PrimaryButton from "shared/components/buttons/PrimaryButton";

const StyledCard = styled(MuiCard)(() => ({
  borderRadius: "15px",
  position: "relative",
  height: "100%",
  transition: "all 0.7s",
  '&:hover': {
    transform: "scale(1.025)",
    boxShadow: `-3px 3px 4px 1px ${theme.palette.primary.light}`,
  },
  boxShadow: "-5px 5px 8px 1px rgba(0,0,0,0.3)", backgroundSize: "cover", backgroundPosition: "50% 50%"
}));


const AdCard = ({ image, buttonText, buttonClick }) => (
  <Box height="100%" width="100%" padding="12px">
    <StyledCard sx={{ backgroundImage: `url(${image})` || "url(https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d3c3b295-ab3f-4836-bae2-62020ff63f13/blazer-mid-77-vintage-mens-shoes-nw30B2.png)"}}>
      <Box height="100%">
        <Chip sx={{ position: "absolute", top: "15px", width: "auto", height: "31px", left: "15px", borderRadius: "15px", textTransform: "unset", backgroundColor: "#fff", color: theme.palette.info.main, fontSize: "16px", fontFamily: "Red Hat Display", boxShadow: "-3px 3px 8px -2px rgba(0,0,0,0.39)" }} label={<Typography sx={{ fontFamily: "Red Hat Display" }}>Reklamë</Typography>} />
        <SecondaryButton size="small" sx={{ position: "absolute", top: "15px", right: "15px"}}><FavoriteBorderOutlinedIcon sx={{ fontSize: "21px" }} color="white"/></SecondaryButton>
        <PrimaryButton onClick={buttonClick} size="small" sx={{ position: "absolute", bottom: "15px", right: "15px", borderRadius: "15px", textTransform: "unset" }}>{ buttonText }</PrimaryButton>
      </Box>
    </StyledCard>
  </Box>
);

AdCard.propTypes = {
  image: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  buttonClick: PropTypes.func
}

AdCard.defaultProps = {
  buttonText: "Vizito Dyqanin!",
  buttonClick: () => {}
}
export default AdCard;
