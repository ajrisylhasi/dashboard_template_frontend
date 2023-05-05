import React, { useEffect } from "react";
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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { storeContext } from "components/provider/Provider";
import { authActions } from "store/auth-reducer";
import { layoutActions } from "store/layout-reducer";
import Copyright from "shared/components/Copyright";

const Login = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["auth"]);
  const { dispatch } = React.useContext(storeContext);

  const logUser = (token) => {
    setCookie("id", token, {
      path: "/",
      maxAge: 1209600,
    });
    dispatch({
      type: authActions.LOGIN
    });
    navigate("/feed");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      user: {
        email: formData.get("email"),
        password: formData.get("password"),
      },
    };
    if(data.user.email === "ajrisylhasi@gmail.com" && data.user.password === "1234567@aA") {
      logUser("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dnZWQiOnRydWUsIm5hbWUiOiJBanJpIFN5bGhhc2kiLCJlbWFpbCI6ImFqcmlzeWxoYXNpQGdtYWlsLmNvbSIsInJvbGUiOiJzaG9wcGVyIn0.PQ3Y5ftdXgHNg16brf18PiBYA1kMU3D0oxOYNhlKqZk");
      dispatch({
        type: layoutActions.SIGNAL_LOGIN,
      });
    } else {
      dispatch({
        type: layoutActions.SIGNAL_LOGIN_ERROR,
      });
    }
  };

  useEffect(() => {
    if (cookies.id) {
      navigate("/feed");
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
