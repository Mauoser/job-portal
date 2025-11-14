import React from "react";
import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <Typography variant="h3" sx={{ mt: 3 }}>
        Welcome to the Job Portal
      </Typography>
      <Typography sx={{ mt: 2 }}>
        Explore jobs, learn about companies, and sign in to apply.
      </Typography>
    </Container>
  );
}
