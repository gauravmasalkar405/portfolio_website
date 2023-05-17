import React from "react";
import { Box, Typography } from "@mui/material";

const Experience = () => {
  return (
    <Box sx={{ mt: "9rem", display: "flex", gap: "1rem" }}>
      <Box sx={{ width: "25%", pl: "1.5rem" }}>
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
      <Box sx={{ width: "calc(75% - 1rem)" }}></Box>
    </Box>
  );
};

export default Experience;
