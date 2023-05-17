import React from "react";
import { Box, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import About from "./About";
import { Link as ScrollLink, Element } from "react-scroll";
import Section from "./Section";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Homepage.css";
import Experience from "./Experience";
import Projects from "./Projects";

const links = [
  { to: "about", text: "ABOUT" },
  { to: "experience", text: "EXPERIENCE" },
  { to: "projects", text: "PROJECTS" },
];

const Homepage = () => {
  return (
    <Box
      sx={{
        width: "80%",
        display: "flex",
        height: "100vh",
        position: "relative",
      }}
    >
      <Box sx={{ width: "50%", mt: "9%", height: "85%", position: "fixed" }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: "3rem",
            fontWeight: "700",
            fontFamily: "inherit",
            mb: "0.6rem",
          }}
        >
          Hi,
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "700",
            fontFamily: "inherit",
            mb: "0.6rem",
          }}
        >
          <span className="animate-charcter">I'm Gaurav Masalkar</span>
        </Typography>
        <Box sx={{ height: "4rem", mt: "0.5rem", width: "60%" }}>
          <Typography
            sx={{
              color: "rgb(148, 163, 184)",
              fontSize: "0.95rem",
              fontFamily: "inherit",
            }}
          >
            <Typewriter
              options={{
                delay: 50,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("I am a web developer.")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(
                    "I build accessible, inclusive products and digital experiences for the web."
                  )
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
            />
          </Typography>
        </Box>

        {/* links----------> */}
        <Box
          sx={{
            width: "auto",
            display: "inline-block",
            gap: "1rem",
            mt: "3rem",
          }}
        >
          {links.map((link, index) => {
            return (
              <ScrollLink
                key={index}
                to={`${link.to}`}
                smooth={true}
                duration={500}
              >
                <Section text={link.text} />
              </ScrollLink>
            );
          })}
        </Box>

        {/* logos */}
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            textDecoration: "none",
            mt: "4rem",
          }}
        >
          <Link to="https://github.com/gauravmasalkar405">
            <GitHubIcon
              sx={{
                color: "rgb(148, 163, 184)",
                fontSize: "1.8rem",
                "&:hover": {
                  color: "rgb(226, 232, 240)",
                },
              }}
            />
          </Link>
          <Link to="https://linkedin.com/in/gaurav-masalkar">
            <LinkedInIcon
              sx={{
                color: "rgb(148, 163, 184)",
                fontSize: "1.8rem",
                "&:hover": {
                  color: "rgb(226, 232, 240)",
                },
              }}
            />
          </Link>
        </Box>
      </Box>

      <Box sx={{ height: "85%", mt: "9%", width: "50%" }}></Box>

      <Box
        sx={{
          width: "50%",
          mt: "9%",
          height: "85%",
        }}
      >
        <Element name="about">
          <About />
        </Element>
        <Element name="experience">
          <Experience />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
      </Box>
    </Box>
  );
};

export default Homepage;
