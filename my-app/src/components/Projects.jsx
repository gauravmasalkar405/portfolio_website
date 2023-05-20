import { Box, Typography, useMediaQuery } from "@mui/material";
import React, { useState, memo } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Projects = ({ name, path, imageSrc, description }) => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const isMobileScreens = useMediaQuery("(max-width: 480px)");
  const isTabletScreens = useMediaQuery("(max-width: 992px)");

  return (
    <Box
      onClick={() => (window.location.href = `${path}`)}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
      sx={{
        mb: "1rem",
        display: "flex",
        gap: "1rem",
        borderRadius: "6px",
        p: isTabletScreens ? "1.2rem 0" : "1.2rem",
        cursor: "pointer",
        backgroundColor: isCardHovered && "rgba(94, 234, 212, 3%)",
      }}
    >
      <Box sx={{ width: "25%" }}>
        <Box
          sx={{
            background: `url(${imageSrc})`,
            width: "100%",
            height: "5rem",
            backgroundSize: "cover",
            borderRadius: "2px",
          }}
        ></Box>
      </Box>
      <Box sx={{ width: "calc(75% - 1rem)" }}>
        <Box>
          <Box sx={{ display: "flex", gap: "0.5rem" }}>
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
              {name}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <ArrowOutwardIcon
                style={{
                  color: isCardHovered ? "rgb(94, 234, 212)" : "white",
                  translate: isCardHovered && "5px -5px",
                  fontSize: "0.9rem",
                  marginBottom: "5px",
                }}
              />
            </Box>
          </Box>
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
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(Projects);
