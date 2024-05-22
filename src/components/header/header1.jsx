import React, { useContext } from "react";
import { ColorModeContext } from "../../Theme.jsx";
import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const handleClick = () => {
    const newMode = theme.palette.mode === "dark" ? "light" : "dark";
    localStorage.setItem("mode", newMode);
    colorMode.toggleColorMode();
  };

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
            <IconButton onClick={handleClick} color="inherit">
              <LightModeOutlined fontSize="small" />
            </IconButton>
          ) : (
            <IconButton onClick={handleClick} color="inherit">
              <DarkModeOutlined fontSize="small" />
            </IconButton>
          )}
        </div>

        <TwitterIcon
          sx={{
            fontSize: "16px",
            color: "#fff",
          }}
        />
        <FacebookIcon
          sx={{
            fontSize: "16px",
            mx: 1,
            color: "#fff",
          }}
        />
        <InstagramIcon
          sx={{
            fontSize: "16px",
            color: "#fff",
          }}
        />
      </Stack>
    </Box>
  );
};

export default Header1;
