import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
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
import projectInfo from "../utils/projects";

// links
const links = [
  { to: "about", text: "ABOUT" },
  { to: "experience", text: "EXPERIENCE" },
  { to: "projects", text: "PROJECTS" },
];

const Homepage = () => {
  const isMobileScreens = useMediaQuery("(max-width: 480px)");
  const isTabletScreens = useMediaQuery("(max-width: 992px)");

  return (
    <Box
      sx={{
        width: "80%",
        display: isTabletScreens ? "block" : "flex",
        height: "100vh",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: isTabletScreens ? "100%" : "50%",
          height: isTabletScreens ? "100%" : "80%",
          margin: "auto 0",
          display: isTabletScreens ? "flex" : "block",
        }}
      >
        <Box
          sx={{
            position: isTabletScreens ? "relative" : "fixed",
            height: isMobileScreens ? "80%" : isTabletScreens ? "73%" : "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            margin: isTabletScreens && "auto 0",
          }}
        >
          <Box>
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
            <Box
              sx={{
                height: "4rem",
                mt: "0.5rem",
                width: isMobileScreens
                  ? "100%"
                  : isTabletScreens
                  ? "80%"
                  : "50%",
              }}
            >
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
          </Box>
          <Box>
            {/* links----------> */}
            <Box
              sx={{
                width: "auto",
                display: "inline-block",
                gap: "1rem",
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
          </Box>
          {/* logos */}
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              textDecoration: "none",
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
      </Box>

      <Box
        sx={{
          width: isTabletScreens ? "100%" : "50%",
          height: "80%",
          margin: "auto 0",
        }}
      >
        <Element name="about">
          <About />
        </Element>
        <Element name="experience">
          <Experience />
        </Element>
        <Element name="projects" style={{ marginTop: "7rem" }}>
          {projectInfo.map(({ name, path, imageSrc, description }, index) => {
            return (
              <Projects
                key={index}
                name={name}
                path={path}
                imageSrc={imageSrc}
                description={description}
              />
            );
          })}
        </Element>
      </Box>
    </Box>
  );
};

export default Homepage;
