import React from "react";
import { Container, Typography } from "@mui/material";

export default function About() {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 3 }}>
        About
      </Typography>
      <Typography sx={{ mt: 2 }}>
        This is a demo job portal built for Assignment 9.
      </Typography>
    </Container>
  );
}
