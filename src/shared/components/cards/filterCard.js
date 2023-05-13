import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card as MuiCard, styled, Box, Divider, Typography, Slider, SliderThumb, TextField} from "@mui/material";
import MaleOutlinedIcon from '@mui/icons-material/MaleOutlined';
import FemaleOutlinedIcon from '@mui/icons-material/FemaleOutlined';
import ToysOutlinedIcon from '@mui/icons-material/ToysOutlined';
import theme from "theme";
import FilterChip from "shared/components/chips/FilterChip";
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import hoodies from "assets/icons/hoodies.svg"
import boots from "assets/icons/boots.svg"
import gym from "assets/icons/gym.svg"
import highHeels from "assets/icons/highHeels.svg"
import jackets from "assets/icons/jackets.svg"
import pants from "assets/icons/pants.svg"
import shoes from "assets/icons/shoes.svg"
import shirts from "assets/icons/shirts.svg"
import dresses from "assets/icons/dresses.svg"

const StyledCard = styled(MuiCard)(() => ({
  borderRadius: "15px",
  position: "relative",
  height: "100%",
  transition: "all 0.7s",
  boxShadow: "-5px 5px 8px 1px rgba(0,0,0,0.3)",
}));

const AirbnbSlider = styled(Slider)(() => ({
  color: theme.palette.primary.light,
  height: 3,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
    '& .airbnb-bar': {
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  '& .MuiSlider-track': {
    height: 3,
  },
  '& .MuiSlider-rail': {
    color: '#d8d8d8',
    opacity: 1,
    height: 3,
  },
}));

const AirbnbThumbComponent = (props) => {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

AirbnbThumbComponent.propTypes = {
  children: PropTypes.node,
};

AirbnbThumbComponent.defaultProps = {
  children: PropTypes.node
};

const priceFormat = (value) => (<Typography variant="caption">{value} <b>€</b></Typography>);

const genderGroup = [
  { label: "Meshkuj", icon: <MaleOutlinedIcon />, onClick: () => {} },
  { label: "Femra", icon: <FemaleOutlinedIcon />, onClick: () => {} },
  { label: "Femije", icon: <ToysOutlinedIcon />, onClick: () => {} },
];

const typeGroup = [
  { alt: "hoodies", src: hoodies, onClick: () => {} },
  { alt: "boots", src: boots, onClick: () => {} },
  { alt: "pants", src: pants, onClick: () => {} },
  { alt: "shoes", src: shoes, onClick: () => {} },
  { alt: "jackets", src: jackets, onClick: () => {} },
  { alt: "gym", src: gym, onClick: () => {} },
  { alt: "highHeels", src: highHeels, onClick: () => {} },
  { alt: "shirts", src: shirts, onClick: () => {} },
  { alt: "dresses", src: dresses, onClick: () => {} },
];

const typeRowSize = 4;

const typeRows = [];

for (let i = 0; i < typeGroup.length; i += typeRowSize) {
  typeRows.push(typeGroup.slice(i, i + typeRowSize));
}

const FilterCard = () => {
  const [ sort, setSort ] = useState(null);
  return (
    <Box height="100%" width="100%" padding="12px">
      <StyledCard>
        <Box height="100%" display="flex" flexBasis="1" paddingTop="35px" paddingBottom="5px">
          <Box width="12%" size="small" padding="5px" display="flex" flexDirection="column" justifyContent="flex-start" gap="15px">
            {genderGroup.map((gender) => (
              <FilterChip onClick={gender?.onClick} icon={gender?.icon}
                label={
                  <Typography variant="caption" display="flex" alignItems="center">{gender?.label}</Typography>
                }
              />
            ))}
          </Box>
          <Divider orientation="vertical" variant="middle" sx={{ color: theme.palette.secondary.light, width: "5px", height: "65%", maxHeight: "65%", my: "auto", borderRightWidth: "2px"}} flexItem textAlign="center" />
          <Box width="12%" display="flex" flexDirection="column" padding="5px" justifyContent="flex-start" gap="15px">
            <FilterChip className="selected" onClick={() => {}}
              label={
                <Typography variant="caption" display="flex" alignItems="center">Te reja</Typography>
              }
            />
            <FilterChip className="selected" onClick={() => {}}
              label={
                <Typography variant="caption" display="flex" alignItems="center">Te perdorura</Typography>
              }
            />
          </Box>
          <Divider orientation="vertical" variant="middle" sx={{ color: theme.palette.secondary.light, width: "5px", height: "65%", maxHeight: "65%", my: "auto", borderRightWidth: "2px"}} flexItem />
          <Box width="36%" display="flex" padding="5px" gap="" flexDirection="column">
            {typeRows.map((typeRow) => (
              <Box display="flex" gap="15px" maxHeight="48px">
                {typeRow.map((type) => (
                  <FilterChip onClick={type?.onClick} 
                    sx={{ 
                      width: "20%", 
                      display: "flex", 
                      justifyContent: "center", 
                      padding: "3px", 
                      "& .MuiChip-label": { textAlign: "center"} 
                    }}
                    label={
                      <img src={type?.src} alt={type?.alt} />
                    }
                  />
                ))}
              </Box>
            ))}
          </Box>
          <Divider orientation="vertical" variant="middle" sx={{ color: theme.palette.secondary.light, width: "5px", height: "65%", maxHeight: "65%", my: "auto", borderRightWidth: "2px"}} flexItem />
          <Box width="18%" display="flex" flexDirection="column" padding="5px" justifyContent="flex-start" gap="15px">
            <FilterChip onClick={() => {}}
              icon={<img src={shirts} alt="shirts" />}
              sx={{ 
                display: "flex", 
                justifyContent: "space-between", 
                padding: "3px", 
                "& .MuiChip-label": { textAlign: "center"} 
              }}
              label={
                <Typography variant="caption" display="flex" alignItems="center">
                  Masa - 
                  <TextField
                    value="s"
                    variant="standard"
                    select
                    sx={{
                      color: theme.palette.primary.light, textAlign: "right"
                    }}
                    InputProps={{
                      disableUnderline: true,
                      style: {
                        color: theme.palette.primary.light
                      }
                    }}
                  >
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                  </TextField>
                </Typography>
              }
            />
            <FilterChip onClick={() => {}}
              icon={<img src={pants} alt="pants" />}
              sx={{ 
                display: "flex", 
                justifyContent: "space-between", 
                padding: "3px", 
                "& .MuiChip-label": { textAlign: "center"} 
              }}
              label={
                <Typography variant="caption" display="flex" alignItems="center">Masa - 

                  <TextField
                    value="38"
                    variant="standard"
                    select
                    sx={{
                      color: theme.palette.primary.light, textAlign: "right"
                    }}
                    InputProps={{
                      disableUnderline: true,
                      style: {
                        color: theme.palette.primary.light
                      }
                    }}
                  >
                    <option value="36">36</option>
                    <option value="38">38</option>
                    <option value="40">40</option>
                    <option value="42">42</option>
                  </TextField>
                </Typography>
              }
            />
            <FilterChip onClick={() => {}}
              icon={<img src={shoes} alt="shoes" />}
              sx={{ 
                display: "flex", 
                justifyContent: "space-between", 
                padding: "3px", 
                "& .MuiChip-label": { textAlign: "center"} 
              }}
              label={
                <Typography variant="caption" display="flex" alignItems="center">Masa - 
                  <TextField
                    value="42"
                    variant="standard"
                    select
                    sx={{
                      color: theme.palette.primary.light, textAlign: "right"
                    }}
                    InputProps={{
                      disableUnderline: true,
                      style: {
                        color: theme.palette.primary.light
                      }
                    }}
                  >
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                  </TextField>
                </Typography>
              }
            />
          </Box>
          <Divider orientation="vertical" variant="middle" sx={{ color: theme.palette.secondary.light, width: "5px", height: "65%", maxHeight: "65%", my: "auto", borderRightWidth: "2px"}} flexItem />
          <Box width="22%" display="flex" flexDirection="column" padding="5px" justifyContent="flex-start" gap="15px" paddingRight="5px">
            <Box maxHeight="31px" display="flex" gap="15px" alignItems="flex-start">
              <FilterChip sx={{ width: "50%", "& .MuiChip-label": { width: "100%" }}} onClick={() => {setSort(sort === null ? "down" : null)}}
                label={
                  <Box display="flex" justifyContent="center" alignItems="center" textAlign="center">
                    <Typography variant="h6" display="flex" alignItems="center" fontFamily="Red Hat Display">€</Typography>
                    <ArrowDownwardRoundedIcon />
                  </Box>
                }
                className={sort === "down" && "selected"}
                disabled={sort === "up"}
              />
              <FilterChip sx={{ width: "50%", "& .MuiChip-label": { width: "100%" }}} onClick={() => setSort(sort === null ? "up" : null)}
                label={
                  <Box display="flex" justifyContent="center" alignItems="center" textAlign="center">
                    <Typography variant="h6" display="flex" alignItems="center" fontFamily="Red Hat Display">€</Typography>
                    <ArrowUpwardRoundedIcon />
                  </Box>
                }
                className={sort === "up" && "selected"}
                disabled={sort === "down"}
              />
            </Box>
            <AirbnbSlider
              slots={{ thumb: AirbnbThumbComponent }}
              getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
              defaultValue={[10, 90]}
              sx={{ maxHeight: "31px", mt: "31px" }}
              valueLabelDisplay="auto"
              valueLabelFormat={priceFormat}
            />
          </Box>
        </Box>
      </StyledCard>
    </Box>
  );
};
export default FilterCard;
