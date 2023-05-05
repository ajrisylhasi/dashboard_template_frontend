import Cookies from 'js-cookie';

function deleteAllCookies() {
  Object.keys(Cookies.get()).forEach((cookieName) => {
    Cookies.remove(cookieName);
  });
}

const initialAuthState = {
  user: {
    logged: false,
    name: '',
    email: '',
    role: ''
  },
};

const loggedInAuthState = {
  user: {
    logged: true,
    name: 'Ajri Sylhasi',
    email: 'ajrisylhasi@gmail.com',
    role: 'shopper'
  },
};

const authActions = {
  AUTH_SET_ALL: 'AUTH_SET_ALL',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
};

function authReducer(state, action) {
  switch (action.type) {
    case authActions.AUTH_SET_ALL:
      return {
        ...state,
        ...action.payload,
      };
    case authActions.LOGIN:
      return { ...state, ...loggedInAuthState };
    case authActions.LOGOUT:
      deleteAllCookies();
      return { ...state, ...initialAuthState };
    default:
      return state;
  }
}

export { initialAuthState, authActions, authReducer };
