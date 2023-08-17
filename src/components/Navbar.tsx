import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuthContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "purple" }}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>

          {user ? (
            <Box display="flex" alignItems="center" gap={1}>
              <Typography>{user.email}</Typography>
              <Button
                sx={{
                  border: "1px solid white",
                  borderRadius: "10px",
                  "&:hover": {
                    color: "gray",
                  },
                }}
                color="inherit"
                onClick={logout}
              >
                Log out
              </Button>
            </Box>
          ) : (
            <Button
              component={Link}
              to="/auth"
              color="inherit"
              sx={{
                border: "1px solid white",
                borderRadius: "10px",
                "&:hover": {
                  color: "red",
                },
              }}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
