const initialLayoutState = {
  pageTitle: "Dashboard",
  openMessage: false,
  error: false,
  signalMessage: "Done!",
};

const layoutActions = {
  LAYOUT_SET_ALL: "LAYOUT_SET_ALL",
  LAYOUT_SET_ERROR: "LAYOUT_SET_ERROR",
  SIGNAL_LOGIN: "SIGNAL_LOGIN",
  SIGNAL_LOGIN_ERROR: "SIGNAL_LOGIN_ERROR",
  CLEAR_LAYOUT: "CLEAR_LAYOUT",
};

function layoutReducer(state, action) {
  switch (action.type) {
    case layoutActions.LAYOUT_SET_ALL:
      return {
        ...state,
        ...action.payload,
      };
    case layoutActions.SIGNAL_LOGIN:
      return {
        ...state,
        ...{
          openMessage: true,
          error: false,
          signalMessage: "Logged in successfully!",
        },
      };
    case layoutActions.SIGNAL_LOGIN_ERROR:
      return {
        ...state,
        ...{
          openMessage: true,
          error: true,
          signalMessage:
            "Something went wrong! Please check your credentials and try again.",
        },
      };
    case layoutActions.LAYOUT_SET_ERROR:
      return {
        ...state,
        ...{
          openMessage: true,
          error: true,
          signalMessage:
            "Something went wrong!" || action.payload?.signalMessage,
        },
      };
    case layoutActions.CLEAR_LAYOUT:
      return {
        ...initialLayoutState,
      };
    default:
      return state;
  }
}

export { initialLayoutState, layoutActions, layoutReducer };
