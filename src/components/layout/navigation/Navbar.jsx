import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import { feedActions } from "store/feed-reducer";
import { storeContext } from "components/provider/Provider";
import Chip from "shared/components/chips";

const Navbar = () => {
  const { dispatch } = useContext(storeContext);
  const [ filterOpen ] = useState(false);

  useEffect(() => {
    dispatch({
      type: filterOpen ? feedActions.FILTER_OPEN : feedActions.FILTER_CLOSE
    });
  }, [ filterOpen ])

  return (
    <Box display="flex" justifyContent="space-between" minHeight="4vh" padding="12px">
        <Chip label="Test" width="100%" />
        <Chip label="Test" width="100%" />
        <Chip label="Test" width="100%" />
        <Chip label="Test" width="100%" />
    </Box>
  );
};

export default Navbar;
