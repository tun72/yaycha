import { useApp } from "../ThemedApp";

import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import {
  Menu as MenuIcon,
  Add as AddIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
  ArrowBack as BackIcon,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const { showForm, setShowForm, setMode, mode, setShowDrawer } = useApp();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        {pathname === "/" ? (
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setShowDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => navigate("/")}
          >
            <BackIcon />
          </IconButton>
        )}

        <Typography sx={{ flexGrow: 1, ml: 2 }}>Yaycha</Typography>
        <Box>
          <IconButton color="inherit" onClick={() => setShowForm(!showForm)}>
            <AddIcon />
          </IconButton>

          <IconButton
            color="inherit"
            edge="end"
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
          >
            {mode === "dark" ? (
              <LightModeIcon />
            ) : (
              <DarkModeIcon onClick={() => setMode("dark")} />
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
