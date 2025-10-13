'use client'

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  
  IconButton,
  Drawer,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";


const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  const styles = {
    color: "#47007aff",
    textDecoration: "none",
    fontSize:'1rem',
    "&:hover": {
      color: "#8500e4ff",
    },
  };

  const menuItems = [
    { text: "Home", href: "home" },
    { text: "Services", href: "services" },
    { text: "Projects", href: "projects" },
    { text: "Testimonials", href: "testimonials" },
    { text: "About Us", href: "about" },
  ];

  return (


    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#fadeffff" }}>
        {/* ===== YEH CONTAINER ADD KAREIN ===== */}
        <Container maxWidth="xl">
          <Toolbar
            disableGutters // Yeh zaroori hai taaki extra padding na aaye
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Logo + Title */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Image src="/logo1.png" width={50} height={50} alt="Logo" />
              <Typography
                variant="h6"
                color="#47007aff"
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  fontSize: { sm: '1.1rem', md: '1.2rem' }
                }}
              >
                Aetibar Information & Technology
              </Typography>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {menuItems.map((item, i) => (

                <ScrollLink to={item.href} style={styles} onMouseEnter={(e) => ( (e.currentTarget as HTMLElement).style.color = "#8500e4ff")}
                  onMouseLeave={(e) => ( (e.currentTarget as HTMLElement).style.color = "#47007aff")} key={i} smooth={true} duration={600} offset={-70}>
                  {item.text}
                </ScrollLink>

              ))}
            </Box>

            {/* Hamburger Icon */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: "block", md: "none" }, color: "#47007aff" }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer for mobile - No Change Needed */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        slotProps={{ paper: { sx: { width: 240, bgcolor: "#fadeffff", textAlign: 'start', gap: 2, p: 3 } } }}
      >
        {menuItems.map((item, i) => (

          <ScrollLink to={item.href} style={styles} onMouseEnter={(e) => ( (e.currentTarget as HTMLElement).style.color = "#8500e4ff")}
            onMouseLeave={(e) => ( (e.currentTarget as HTMLElement).style.color = "#47007aff")} key={i} smooth={true} duration={600} offset={-70}>
            {item.text}
          </ScrollLink>
        ))}
      </Drawer>

      {/* IMPORTANT SPACER: Yeh zaroor add karein */}

    </>
  );
};

export default Header;
