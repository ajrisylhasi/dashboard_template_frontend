import React, { useState, useEffect, useContext } from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import AppBar from "shared/components/AppBar";
import logo from "assets/images/logo.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendIcon from "@mui/icons-material/Send";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { TextField } from "@mui/material";
import Chip from "shared/components/chips";
import { feedActions } from "store/feed-reducer";
import { storeContext } from "components/provider/Provider";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { dispatch } = useContext(storeContext);
  const navigate = useNavigate();
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    dispatch({
      type: filterOpen ? feedActions.FILTER_OPEN : feedActions.FILTER_CLOSE,
    });
  }, [filterOpen]);

  return (
    <AppBar>
      <Box sx={{ borderRadius: "15px" }}>
        <Box
          height="12vh"
          maxHeight="12vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
          margin="15px"
        >
          <Box
            width="45%"
            marginRight="5%"
            paddingRight="25px"
            display="flex"
            justifyContent="flex-end"
          >
            <Box width="85%" display="flex" gap="15px">
              <Box width="20%" minWidth="40px">
                <Chip
                  sx={{
                    width: "40px",
                    float: "right",
                  }}
                  label={
                    <Box
                      sx={{
                        height: "40px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <IconButton
                        onClick={() => {
                          setFilterOpen(!filterOpen);
                        }}
                      >
                        <FilterAltOutlinedIcon />
                      </IconButton>
                    </Box>
                  }
                />
              </Box>
              <Chip
                sx={{
                  width: "80%",
                  "& .MuiChip-label": {
                    padding: 0,
                    width: "100%",
                  },
                }}
                label={
                  <Box
                    sx={{
                      maxHeight: "90%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <TextField
                      placeholder="Kerko"
                      variant="standard"
                      sx={{
                        paddingLeft: "10px",
                      }}
                      InputProps={{
                        disableUnderline: true,
                        endAdornment: (
                          <IconButton sx={{ width: "40px", height: "40px" }}>
                            <SearchOutlinedIcon />
                          </IconButton>
                        ),
                      }}
                    />
                  </Box>
                }
              />
            </Box>
          </Box>
          <Box width="10%" height="100%" display="flex" justifyContent="center">
            <Box
              height="100%"
              onClick={() => navigate("/feed")}
              display="flex"
              sx={{
                borderRadius: "50%",
                boxShadow: "-5px 5px 8px 1px rgba(0,0,0,0.3)",
                aspectRatio: "1/1",
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={logo} alt="VeshDesh logo" height="90%" />
            </Box>
          </Box>
          <Box width="45%" marginLeft="5%" paddingLeft="25px">
            <Chip
              width="85%"
              label={
                <Box
                  sx={{
                    maxHeight: "90%",
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    gap: "15px",
                  }}
                >
                  <IconButton>
                    <FavoriteBorderIcon />
                  </IconButton>
                  <IconButton>
                    <SendIcon />
                  </IconButton>
                  <IconButton>
                    <ShoppingBagOutlinedIcon />
                  </IconButton>
                  <IconButton>
                    <AccountCircleOutlinedIcon />
                  </IconButton>
                </Box>
              }
            />
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
