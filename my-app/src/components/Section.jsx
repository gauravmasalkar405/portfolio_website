import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

const Section = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{ cursor: "pointer", mb: "1.5rem" }}
    >
      <Box
        sx={{
          display: "inline-block",
          width: isHovered ? "4rem" : "2rem",
          borderBottom: isHovered
            ? "1px solid rgb(226, 232, 240)"
            : "1px solid rgb(148, 163, 184)",
          marginBottom: "4px",
          marginRight: "1rem",
        }}
      ></Box>
      <Typography
        sx={{
          display: "inline-block",
          color: isHovered ? "rgb(226, 232, 240)" : "rgb(148, 163, 184)",
          fontWeight: "600",
          fontSize: "0.75rem",
          fontFamily: "inherit",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Section;
