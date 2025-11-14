import React from "react";
import { Container, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 3 }}>
        Contact
      </Typography>
      <Typography sx={{ mt: 2 }}>Contact us at jobs@example.com</Typography>
    </Container>
  );
}
