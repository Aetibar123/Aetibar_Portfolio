// file: app/layout.js ya app/layout.tsx

"use client"; // Step 1: Client component banana zaroori hai

import { useEffect } from 'react'; // Step 2: useEffect import karein
import AOS from 'aos';             // Step 2: AOS import karein
import 'aos/dist/aos.css';        // Step 2: AOS ki CSS import karein

import { Toolbar, CssBaseline } from "@mui/material";
import Footer from '@/component/Footer/footer'
import Header from '@/component/header'

export default function RootLayout({ children }: { children: React.ReactNode }) {

  // Step 3: useEffect hook ka use karein
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation ki speed (in ms)
      once: false,    // Animation sirf ek baar chalega
    });
  }, []); // Empty array ka matlab hai ki yeh code sirf ek baar chalega jab component load hoga

  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <Header />
        <Toolbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}