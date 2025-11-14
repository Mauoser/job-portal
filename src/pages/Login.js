import React, { useState } from "react";
import { TextField, Button, Container, Box, Typography } from "@mui/material";
import { useAuth } from "../services/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      setErr(error.response?.data?.error || "Login failed");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5">Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            fullWidth
            sx={{ mt: 2 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            sx={{ mt: 2 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {err && (
            <Typography color="error" sx={{ mt: 1 }}>
              {err}
            </Typography>
          )}
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
