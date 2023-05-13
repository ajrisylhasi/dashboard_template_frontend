/* eslint-disable no-useless-computed-key */
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: "rgb(50, 168, 82, 0.35)",
      main: "#3d7d4e",
      contrastText: "#eff6ee"
    },
    white: {
      main: "#EFF6EE"
    },
    secondary: {
      main: "#FF6542",
      contrastText: '#EFF6EE',
    },
    error: {
      main: "#FF6542",
      contrastText: '#EFF6EE',
    },
    warning: {
      main: "#FF6542"
    },
    info: {
      main: "#273043"
    }
  },
  typography: {
    fontFamily: [
      "'Arvo', serif"
    ]
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: "15px"
        }
      }
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: "calc(12vh + 30px)",
        }
      }
    },
  },
  breakpoints: {
    values: {
      xs: 500,
      sm: 768,
      md: 992,
      lg: 1260,
      xl: 1920,
    },
  },

});

export default theme;
