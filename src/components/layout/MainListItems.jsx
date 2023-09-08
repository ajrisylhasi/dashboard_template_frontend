import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InventoryIcon from "@mui/icons-material/Inventory";
import { useNavigate } from "react-router-dom";

const MainListItems = () => {
  const navigate = useNavigate();
  return (
    <>
      <ListItemButton onClick={() => navigate("/products")}>
        <ListItemIcon>
          <CheckroomIcon />
        </ListItemIcon>
        <ListItemText primary="Produktet" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/stock")}>
        <ListItemIcon>
          <InventoryIcon />
        </ListItemIcon>
        <ListItemText primary="Stoku" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/orders")}>
        <ListItemIcon>
          <LocalShippingIcon />
        </ListItemIcon>
        <ListItemText primary="Porosite" />
      </ListItemButton>
    </>
  );
};
export default MainListItems;
