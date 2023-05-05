import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import logo from 'assets/images/logo.png';
import 'components/app/App.css';
import { Button } from "@mui/material";

const { REACT_APP_EMAIL_SERVICE_ID, REACT_APP_EMAIL_TEMPLATE_ID, REACT_APP_EMAIL_USER_ID } = process.env;

const Home = () => {
  const navigate = useNavigate();
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
      res => console.log(res.text),
      error => console.log(error.text)
    );

    event.target.reset();
  };
  
  return (
    <div className="App">
			<Button onClick={() => navigate("/login")}>
				Prototipi
			</Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <form ref={form} onSubmit={handleSendEmail} id="contact-form">
        <input type="text" id="user_name" name="user_name" placeholder="Emri*" required />

        <input type="email" id="user_email" name="user_email" placeholder="Email*" required />

        <textarea id="message" name="message" placeholder="Mesazhi" />

        <button type="submit" value="Send">Dergo</button>
      </form>
    </div>
  );
}

export default Home;
