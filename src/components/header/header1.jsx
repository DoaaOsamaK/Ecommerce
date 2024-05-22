import React from "react";
import { useContext } from "react";
import { ColorModeContext } from "../../Theme.jsx";
import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";


const header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <Box
      sx={{
        bgcolor: "#5c607b",
      }}
    >
      <Stack direction={"row"} alignItems={"center"}>
        <Typography
          sx={{
            mr: 2,
            p: "4px 10px",
            bgcolor: "#D23F57",
            borderRadius: "12px",
            fontSize: "12px",
            fontWeight: "bold",
            color: "#fff",
          }}
          variant="body2"
        >
          HOT
        </Typography>

        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 300,
            color: "#fff",
          }}
          variant="body2"
        >
          Free Express Shipping
        </Typography>

        <Box flexGrow={1} />

        <div>
          {theme.palette.mode === "light" ? (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <LightModeOutlined fontSize="small" />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <DarkModeOutlined fontSize="small" />
            </IconButton>
          )}
        </div>

      </Stack>

    </Box>
  );
};

export default header1;
