const initialFeedState = {
  filterOpen: false
};

const feedActions = {
  FILTER_OPEN: "FILTER_OPEN",
  FILTER_CLOSE: "FILTER_CLOSE",
};

function feedReducer(state, action) {
  switch (action.type) {
    case feedActions.FILTER_OPEN:
      return {
        ...state,
        ...{ filterOpen: true},
      };
    case feedActions.FILTER_CLOSE:
      return {
        ...state,
        ...{ filterOpen: false},
      };
    default:
      return state;
  }
}

export { initialFeedState, feedActions, feedReducer };
