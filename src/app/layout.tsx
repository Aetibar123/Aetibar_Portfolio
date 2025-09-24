

import { Toolbar, CssBaseline } from "@mui/material";
import Footer from '@/component/Footer/footer'
import Header from '@/component/header'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
     
      <body >
        <CssBaseline />
        <Header />
        <Toolbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}