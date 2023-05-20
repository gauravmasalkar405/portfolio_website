import React, { useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Experience = () => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isResumeButtonHovered, setIsResumeButtonHovered] = useState(false);

  const isMobileScreens = useMediaQuery("(max-width: 480px)");
  const isTabletScreens = useMediaQuery("(max-width: 992px)");
  return (
    <>
      <Box
        onMouseEnter={() => setIsCardHovered(true)}
        onMouseLeave={() => setIsCardHovered(false)}
        sx={{
          mt: "9rem",
          display: "flex",
          gap: "1rem",
          borderRadius: "6px",
          p: isTabletScreens ? "1.2rem 0" : "1.2rem",
          cursor: "pointer",
          backgroundColor: isCardHovered && "rgba(94, 234, 212, 3%)",
          borderTop: isCardHovered && "1px solid rgba(148, 163, 184, 10%)",
        }}
      >
        <Box sx={{ width: "25%" }}>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "12px",
              color: "rgb(148, 163, 184)",
              fontFamily: "inherit",
            }}
          >
            JAN - MAY 2023
          </Typography>
        </Box>
        <Box sx={{ width: "calc(75% - 1rem)" }}>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: "600",
              fontFamily: "inherit",
              color: "white",
              mb: "0.3rem",
              color: isCardHovered ? "rgb(94, 234, 212)" : "white",
            }}
          >
            Coding Ninjas
          </Typography>
          <Typography
            sx={{
              mb: "1.2rem",
              fontSize: "0.9rem",
              fontFamily: "inherit",
              color: "rgb(148, 163, 184)",
            }}
          >
            Teaching Assistant | Internship
          </Typography>
          <Typography
            sx={{
              color: "rgb(148, 163, 184)",
              fontSize: "0.9rem",
              lineHeight: "1.625rem",
              mt: "0.5rem",
              fontFamily: "inherit",
              textAlign: isTabletScreens ? "justify" : "",
            }}
          >
            Guided and mentored students on best practices in web development to
            successfully complete projects and enhance their skills. Facilitated
            group discussions and provided constructive feedback to improve
            student comprehension of key concepts, resulting in increased
            engagement and active participation. In addition, I collaborated
            with students to identify their individual learning goals and
            tailored my guidance accordingly.
          </Typography>
        </Box>
      </Box>
      <Box
        onMouseEnter={() => setIsResumeButtonHovered(true)}
        onMouseLeave={() => setIsResumeButtonHovered(false)}
        onClick={() =>
          (window.location.href =
            "https://drive.google.com/file/d/13TFcK83nnAIuk3qrYBj-9l9KgPhX2YBN/view?usp=sharing")
        }
        sx={{
          display: "flex",
          alignItems: "center",
          fontFamily: "inherit",
          mt: "1rem",
          ml: isTabletScreens ? "" : "1.5rem",
          gap: "0.3rem",
          cursor: "pointer",
        }}
      >
        <Link
          style={{
            textDecoration: "none",
            color: isResumeButtonHovered ? "white" : "rgb(94, 234, 212)",
            fontSize: "13px",
            fontFamily: "inherit",
          }}
        >
          View Full Resume
        </Link>
        <ArrowForwardIcon
          style={{
            fontSize: "1rem",
            color: isResumeButtonHovered ? "white" : "rgb(94, 234, 212)",
            translate: isResumeButtonHovered && "5px 0px",
          }}
        />
      </Box>
    </>
  );
};

export default Experience;
