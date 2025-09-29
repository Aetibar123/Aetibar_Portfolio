// src/components/Footer.tsx
"use client";

import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import NextLink from 'next/link';

const Footer = () => {
  return (
    <Box
      component="footer"
      overflow={'hidden'}
      sx={{
        bgcolor: '#f8d2ffff',
        p: { xs: 4, sm: 6 },
        width: '100%',
      }}
    >
      <Container maxWidth="lg"  data-aos="fade-up"      // <-- YEH ATTRIBUTE ADD KIYA HAI
          data-aos-delay="200" 
          data-aos-duration="1800">
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: { xs: 4, sm: 2 }, // Added a gap for better spacing management
          }}
        >
          {/* === About Section === */}
          <Box sx={{ width: { xs: '100%', sm: '40%', md: '30%' } }}>
            <Typography variant="h6" color="#47007aff" gutterBottom sx={{ fontWeight: 'bold' }}>
              Aetibar Information & Technology
            </Typography>
            <Typography variant="body2" color="#5b009cff">
              We specialize in a comprehensive suite of services that includes web development, cloud computing, IoT, AR/VR, and blockchain.
            </Typography>
          </Box>

          {/* === Links Section === */}
          <Box sx={{ width: { xs: '45%', sm: '20%', md: '15%' } }}>
            <Typography variant="h6" color="#47007aff" gutterBottom sx={{ fontWeight: 'bold' }}>
              Links
            </Typography>
            <Link component={NextLink} href="/about" color="#5b009cff" display="block" sx={{ mb: 1, '&:hover': { textDecoration: 'underline' } }}>About</Link>
            <Link component={NextLink} href="/contact" color="#5b009cff" display="block" sx={{ mb: 1, '&:hover': { textDecoration: 'underline' } }}>Contact</Link>
            <Link component={NextLink} href="/privacy-policy" color="#5b009cff" display="block" sx={{ '&:hover': { textDecoration: 'underline' } }}>Privacy</Link>
          </Box>

          {/* === Follow Us Section === */}
          <Box sx={{ width: { xs: '45%', sm: '20%', md: '15%' } }}>
            <Typography variant="h6" color="#47007aff" gutterBottom sx={{ fontWeight: 'bold' }}>
              Follow Us
            </Typography>
            <Box>
              <IconButton aria-label="Twitter" component="a" href="https://x.com/Aetibar_" sx={{ color: '#5b009cff', '&:hover': { color: '#47007aff' } }}>
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="Instagram" component="a" href="https://www.instagram.com/aetibar786" sx={{ color: '#5b009cff', '&:hover': { color: '#47007aff' } }}>
                <InstagramIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* === Copyright Section === */}
        <Box mt={5} pt={3} sx={{ borderTop: '1px solid rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="body2" color="#5b009cff" align="center">
            {'Copyright © '}
            <Link color="inherit" component={NextLink} href="/">
              Aetibar Information & Technology
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;