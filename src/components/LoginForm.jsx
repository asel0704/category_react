import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { styled, TextField, FormControl, Button } from "@mui/material";

const LoginWrapper = styled("div")`
  top: 20%;
  left: 35%;
  width: 400px;
  height: auto;
  border: 1px solid #c1c2c3;
  padding: 16px;
  border-radius: 4px;
  h4 {
    margin-top: 0;
    text-align: center;
  }
`;

export const LoginForm = ({ onAuthSubmit }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    onAuthSubmit({
      email: username,
      password
    });
  };

  return (
    <LoginWrapper>
      <h4>Please Log In</h4>
      <form onSubmit={handleSubmit}>
        <FormControl sx={{ width: "100%", mb: 1 }}>
          <TextField
            label="e-mail"
            variant="outlined"
            type="email"
            onChange={(e) => setUserName(e.target.value)}
          />
        </FormControl>

        <FormControl sx={{ width: "100%", mb: 1 }}>
          <TextField
            label="Пароль"
            variant="outlined"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ width: "50%", mb: 1, marginLeft: "100px" }}>
          <Button type="submit" variant="contained">
            Авторизоваться
          </Button>
        </FormControl>
      </form>
    </LoginWrapper>
  );
};
LoginForm.propTypes = {
  onAuthSubmit: PropTypes.func.isRequired
};
