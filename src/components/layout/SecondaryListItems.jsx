import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../store/auth-reducer";
import { storeContext } from "../provider/Provider";

const SecondaryListItems = () => {
  const { dispatch } = React.useContext(storeContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch({ type: authActions.LOGOUT });
    navigate("/login");
  };

  return (
    <ListItemButton onClick={handleLogout}>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Dilni" />
    </ListItemButton>
  );
};
export default SecondaryListItems;
