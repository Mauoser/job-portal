import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const jobPosts = [
  {
    id: 1,
    title: "Full Stack Developer",
    description:
      "Join our dynamic team to work on cutting-edge technologies. Develop and maintain sophisticated web applications for our diverse client base.",
    requiredSkills: ["React", "Node.js", "JavaScript", "MongoDB", "AWS"],
    salary: "$120,000 - $160,000/year",
    lastUpdated: "Last updated 2 days ago",
    applyLink: "https://example.com/apply/full-stack-developer",
  },
  {
    id: 2,
    title: "Digital Marketing Specialist",
    description:
      "Elevate our digital marketing strategies to promote our innovative products. Proficiency in SEO, SEM, and social media marketing is highly valued.",
    requiredSkills: [
      "SEO",
      "SEM",
      "Social Media",
      "Google Analytics",
      "Content Marketing",
    ],
    salary: "$70,000 - $95,000/year",
    lastUpdated: "Last updated 1 day ago",
    applyLink: "https://example.com/apply/digital-marketing-specialist",
  },
  {
    id: 3,
    title: "UX/UI Designer",
    description:
      "Shape engaging user experiences and create visually captivating designs. Work alongside cross-functional teams to turn ideas into reality.",
    requiredSkills: [
      "Figma",
      "Adobe XD",
      "Wireframing",
      "Prototyping",
      "User Research",
    ],
    salary: "$85,000 - $120,000/year",
    lastUpdated: "Last updated 4 hours ago",
    applyLink: "https://example.com/apply/ux-ui-designer",
  },
  {
    id: 4,
    title: "Data Scientist",
    description:
      "Leverage advanced analytics and machine learning to uncover insights from vast data sets. Proficiency with Python and R is a must.",
    requiredSkills: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "SQL",
      "TensorFlow",
    ],
    salary: "$110,000 - $150,000/year",
    lastUpdated: "Last updated 3 days ago",
    applyLink: "https://example.com/apply/data-scientist",
  },
  {
    id: 5,
    title: "Customer Support Representative",
    description:
      "Deliver unparalleled customer service and support. Exceptional communication skills and a knack for solving problems are key.",
    requiredSkills: [
      "Communication",
      "Problem Solving",
      "Customer Service",
      "CRM Software",
      "Patience",
    ],
    salary: "$40,000 - $55,000/year",
    lastUpdated: "Last updated 6 hours ago",
    applyLink: "https://example.com/apply/customer-support-representative",
  },
  {
    id: 6,
    title: "Project Manager",
    description:
      "Guide and coordinate project teams to ensure successful project delivery. Strong organizational and leadership skills are required.",
    requiredSkills: [
      "Project Management",
      "Agile",
      "Leadership",
      "Budget Management",
      "Stakeholder Communication",
    ],
    salary: "$95,000 - $135,000/year",
    lastUpdated: "Last updated 1 week ago",
    applyLink: "https://example.com/apply/project-manager",
  },
];

const JobListings = () => {
  return (
    <Container sx={{ mt: 3 }}>
      <Typography variant="h4" gutterBottom>
        Job Listings
      </Typography>
      <Grid container spacing={2}>
        {jobPosts.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {job.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {job.description}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: "bold", mt: 2, mb: 1 }}
                >
                  Salary:
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {job.salary}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: "bold", mb: 1 }}
                >
                  Required Skills:
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {job.requiredSkills.join(", ")}
                </Typography>
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                  {job.lastUpdated}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={job.applyLink} target="_blank">
                  Apply
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default JobListings;
