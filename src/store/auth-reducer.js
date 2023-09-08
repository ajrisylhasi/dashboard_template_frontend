import Cookies from "js-cookie";

function deleteAllCookies() {
  Object.keys(Cookies.get()).forEach((cookieName) => {
    Cookies.remove(cookieName);
  });
}

const initialAuthState = {
  isLoggedIn: false,

  user: {
    name: "",
    email: "",
    role: "",
    imageSrc: "",
    alternateEmail: "",
  },
};

const authActions = {
  AUTH_SET_ALL: "AUTH_SET_ALL",
  LOGOUT: "LOGOUT",
};

function authReducer(state, action) {
  switch (action.type) {
    case authActions.AUTH_SET_ALL:
      return {
        ...state,
        ...action.payload,
        user: { ...state.user, ...action.payload.user },
        passwordChange: {
          ...state.passwordChange,
          ...action.payload.passwordChange,
        },
      };
    case authActions.LOGOUT:
      deleteAllCookies();
      return { ...state, ...initialAuthState };
    default:
      return state;
  }
}

export { initialAuthState, authActions, authReducer };
