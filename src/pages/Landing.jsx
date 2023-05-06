import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import logo from 'assets/images/logo.png';
import 'components/app/App.css';
import PrimaryButton from "shared/components/buttons/PrimaryButton";
import { Typography, Box } from "@mui/material";
import theme from "theme";

const { REACT_APP_EMAIL_SERVICE_ID, REACT_APP_EMAIL_TEMPLATE_ID, REACT_APP_EMAIL_USER_ID } = process.env;

const Landing = () => {
  const navigate = useNavigate();
  const [ message, setMessage ] = useState("");
  const [ error, setError ] = useState(false);
  const form = useRef();

  const handleSendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm(
      REACT_APP_EMAIL_SERVICE_ID, 
      REACT_APP_EMAIL_TEMPLATE_ID, 
      form.current,
      REACT_APP_EMAIL_USER_ID
    )
    .then( 
      () => setMessage("Faleminderit qe na u bashkuat!"),
      () => {setMessage("Dicka nuk funksionoj"); setError(true)},
    );

    event.target.reset();
  };
  
  return (
    <div className="App">
      <Box
        sx={{
          position: "absolute", bottom: "15px", right: "15px",
          [theme.breakpoints.down("lg")]: {
            display: 'none'
          },
        }}
      >
        <PrimaryButton sx={{ padding: "15px" }} onClick={() => navigate("/feed")}>
          Prototipi
        </PrimaryButton>
      </Box>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <form ref={form} onSubmit={handleSendEmail} id="contact-form">
        <input type="text" id="user_name" name="user_name" placeholder="Emri*" required />

        <input type="email" id="user_email" name="user_email" placeholder="Email*" required />

        <textarea id="message" name="message" placeholder="Mesazhi" />

        <button type="submit" value="Send">Dergo</button>

        <Box>
          <Typography variant="caption" color={error ? "error" : "primary"}>{ message }</Typography>
        </Box>
      </form>
    </div>
  );
}

export default Landing;
