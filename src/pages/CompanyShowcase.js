import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const CompanyShowcase = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get("http://localhost:3000/user/companyImage");
        const comps = res.data.companies.map((c) => ({
          name: c.companyName,
          imagePath: `http://localhost:3000${c.imagePath}`,
        }));
        setCompanies(comps);
      } catch (err) {
        console.error("Error fetching companies:", err);
      }
    };
    fetchCompanies();
  }, []);

  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 3 }}>
        Company Showcase
      </Typography>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {companies.map((c, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={c.imagePath}
                alt={c.name}
              />
              <CardContent>
                <Typography>{c.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        {companies.length === 0 && (
          <Typography sx={{ mt: 2 }}>
            No company images found. Upload images in the backend for demo.
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default CompanyShowcase;
