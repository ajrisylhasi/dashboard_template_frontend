import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { authActions } from "store/auth-reducer";
import { layoutActions } from "store/layouts-reducer";
import { storeContext } from "components/provider/Provider";
import Copyright from "shared/components/Copyright";

const { REACT_APP_API_URL } = process.env;
const Login = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["auth"]);
  const { dispatch } = useContext(storeContext);

  const logUser = (res) => {
    setCookie("id", res.data.token, {
      path: "/",
      maxAge: 1209600,
    });
    dispatch({
      type: authActions.SET_LOGGED_IN,
      payload: {
        isLoggedIn: true,
      },
    });
    navigate("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      spree_user: {
        email: formData.get("email"),
        password: formData.get("password"),
      },
    };
    axios
      .post(`${REACT_APP_API_URL}/api/login/`, data)
      .then((res) => {
        if (res.status === 200) {
          logUser(res);
          dispatch({
            type: layoutActions.LAYOUT_SET_ALL,
            payload: {
              openMessage: true,
              error: false,
              signalMessage: "Kyqur me sukses!",
            },
          });
        }
      })
      .catch(() => {
        dispatch({
          type: layoutActions.LAYOUT_SET_ALL,
          payload: {
            openMessage: true,
            error: true,
            signalMessage:
              "Ka ndodhë një gabim. Ju lutemi, rishikoni detajet dhe provoni prap.",
          },
        });
      });
  };

  useEffect(() => {
    if (cookies.id) {
      navigate("/");
    }
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link component={RouterLink} to="/register" variant="body2">
                Don&apos;t have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};
export default Login;
