import React from "react";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box>
      <Typography
        sx={{
          color: "rgb(148, 163, 184)",
          fontSize: "0.95rem",
          lineHeight: "1.625rem",
          mt: "0.5rem",
          mb: "1.2rem",
          ml: "1.5rem",
          fontFamily: "inherit",
        }}
      >
        Back in 2022, I decided to try my hand at creating static webpages and
        tumbled head first into the rabbit hole of coding and web development. I
        am passionate about creating visually appealing and functional websites.
      </Typography>
      <Typography
        sx={{
          color: "rgb(148, 163, 184)",
          fontSize: "0.95rem",
          lineHeight: "1.625rem",
          mt: "0.5rem",
          mb: "1.2rem",
          ml: "1.5rem",
          fontFamily: "inherit",
        }}
      >
        My portfolio showcases my skills in HTML, CSS, and JavaScript, as well
        as my ability to develop responsive and user-friendly designs. I enjoy
        tackling challenges and constantly learning new technologies to enhance
        my development skills. I strive to deliver high-quality code and
        collaborate effectively with clients and team members.
      </Typography>
      <Typography
        sx={{
          color: "rgb(148, 163, 184)",
          fontSize: "0.95rem",
          lineHeight: "1.625rem",
          mt: "0.5rem",
          ml: "1.5rem",
          fontFamily: "inherit",
        }}
      >
        When I’m not at the computer, I’m usually rock climbing, hanging out
        with my friends and dog, or exploring some new things.
      </Typography>
    </Box>
  );
};

export default About;
