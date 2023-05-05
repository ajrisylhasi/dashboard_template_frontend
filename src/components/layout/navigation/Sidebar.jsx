import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import AppBar from "shared/components/AppBar";
import Drawer from "shared/components/Drawer";
import MainListItems from "components/layout/navigation/MainListItems";
import SecondaryListItems from "components/layout/navigation/SecondaryListItems";
import MobileDrawer from "components/layout/navigation/MobileDrawer";
import logo from "assets/images/logo.png"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar, Chip, TextField } from "@mui/material";
import theme from "theme";

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);

  const isPhone = useMediaQuery({ query: "(max-width: 768px)" });
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  const drawerContent = () => (
    <>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          px: [1],
        }}
      >
        <Box width="50%">
          <Link to="/">
            <Avatar src={logo} />
          </Link>
        </Box>
        <Box width="50%" textAlign="right">
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Divider />
      <List component="nav">
        <MainListItems closeDrawer={closeDrawer} />
        <Divider sx={{ my: 1 }} />
        <SecondaryListItems closeDrawer={closeDrawer} />
      </List>
    </>
  );

  return (
    <>
      <AppBar position="absolute" sx={{ backgroundColor: "transparent", boxShadow: "none", marginBottom: '30px', padding: "0px 20%" }} open={open && !isPhone}>
        <Box sx={{ borderRadius: "15px" }}>
          <Box height="12vh" maxHeight="12vh" display="flex" justifyContent="center" alignItems="center" margin="15px">
            <Box width="45%" marginRight="5%"  paddingRight="25px" display="flex" justifyContent="flex-end">
              <Box width="85%" display="flex" gap="15px">
                <Chip 
                  sx={{ 
                    height: "31px", 
                    width: "90%",
                    borderRadius: "15px", 
                    textTransform: "unset", 
                    backgroundColor: "#fff", 
                    color: theme.palette.info.main, fontSize: "16px", 
                    fontFamily: "Red Hat Display", 
                    boxShadow: "-3px 3px 8px -2px rgba(0,0,0,0.39)",
                    '& .MuiChip-label': {
                      padding: "7px"
                    },
                  }}
                  label={
                    <Box sx={{ maxHeight: "90%", display: "flex", justifyContent: "center"}}>
                      <TextField placeholder="Standard" variant="standard"
                        InputProps={{
                          disableUnderline: true,
                          endAdornment: (
                            <IconButton sx={{ paddingRight: 0 }}>
                              <SearchOutlinedIcon />
                            </IconButton>
                          )
                        }}  
                      />
                    </Box>
                  } 
                />
                <Box width="20%">
                  <Chip 
                    sx={{ 
                      height: "31px", 
                      width: "31px",
                      borderRadius: "15px", 
                      textTransform: "unset", 
                      backgroundColor: "#fff", 
                      color: theme.palette.info.main, fontSize: "16px", 
                      fontFamily: "Red Hat Display", 
                      boxShadow: "-3px 3px 8px -2px rgba(0,0,0,0.39)",
                      "& .MuiChipLabel": {

                      }
                    }} 
                    label={
                      <Box sx={{ height: "31px", display: "flex", justifyContent: "center" }}>
                        <IconButton>
                          <FilterAltOutlinedIcon />
                        </IconButton>
                      </Box>
                    } 
                  />
                </Box>
              </Box>
            </Box>
            <Box width="10%" height="100%" display="flex" justifyContent="center">
              <Box height="100%" display="flex" sx={{ borderRadius: '50%', boxShadow: "-5px 5px 8px 1px rgba(0,0,0,0.3)", aspectRatio: "1/1", backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}>
                <img src={logo} alt="VeshDesh logo" height="90%" />
              </Box>
            </Box>
            <Box width="45%" marginLeft="5%" paddingLeft="25px">
              <Chip 
                sx={{
                  height: "31px", 
                  width: "85%",
                  borderRadius: "15px", 
                  textTransform: "unset", 
                  backgroundColor: "#fff", 
                  color: theme.palette.info.main, fontSize: "16px", 
                  fontFamily: "Red Hat Display", 
                  boxShadow: "-3px 3px 8px -2px rgba(0,0,0,0.39)" 
                }} 
                label={
                  <Box sx={{ maxHeight: "90%", display: "flex", justifyContent: "center" }}>
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
      {isPhone ? (
        <MobileDrawer open={open} closeDrawer={closeDrawer}>
          {drawerContent()}
        </MobileDrawer>
      ) : (
        <Drawer variant="permanent" open={open}>
          {drawerContent()}
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;
