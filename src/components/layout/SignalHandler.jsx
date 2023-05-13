import React, { useContext } from "react";
import { storeContext } from "components/provider/Provider";
import {layoutActions} from "store/layout-reducer";
import Signal from "shared/components/Signal";
import { Box } from "@mui/material";

const SignalHandler = () => {
  const { state, dispatch } = useContext(storeContext);

  const handleCloseMessage = () => {
    dispatch({
      type: layoutActions.LAYOUT_SET_ALL,
      payload: {
        openMessage: false,
        error: false,
      },
    });
  };

  return (
    <Box>
      {state.layout.error ? (
        <Signal
          message={state.layout.signalMessage}
          type="error"
          handleClose={handleCloseMessage}
          open={state.layout.openMessage || false}
        />
      ) : (
        <Signal
          message={state.layout.signalMessage}
          type="success"
          handleClose={handleCloseMessage}
          open={state.layout.openMessage || false}
        />
      )}
    </Box>
  );
};

export default SignalHandler;
