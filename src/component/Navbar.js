import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = () => {
  const loggedIn = useSelector((state => state.auth.loggedIn));
  const noneLink = {
    textDecoration: "none",
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          <Link to="/" style={noneLink}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
          </Link>
          <Box sx={{ display: "flex" }}>
            <Link style={noneLink} to="/NovaLab">
              <Typography sx={{ minWidth: 100 }}>Home</Typography>
            </Link>
            <Link style={noneLink} to="/signin">
              <Typography sx={{ minWidth: 100 }}>Sign in</Typography>
            </Link>
            <Link style={noneLink} to="/signup">
              <Typography sx={{ minWidth: 100 }}>Sign Up</Typography>
            </Link>
            {loggedIn && 
            <Link style={noneLink} to="/profile">
              <Typography sx={{ minWidth: 100 }}>Profile</Typography>
            </Link>
}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
