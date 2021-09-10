import { Box } from "@chakra-ui/react";
import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";

export default function Layout({children,title,description}) {
  return (
    <Box>
      <Head>
        <title>Home</title>
        <meta charSet="utf-8"/> 
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="Animales,tipos de animales,clasificacion de animales" /> 
        <meta name="description" content={description} />
        <meta name="author" content="Rohyller Pereira" />
        <meta name="copyright" content="Rohyller Pereira @2021" /> 
        <meta property="og:image" content="icon-svg/logo3.png" /> 
        <meta property="og:description" content="Animales,tipos de animales,clasificacion de animales y más" /> 
        <meta property="og:title" content="Animalia" />
        <meta property="twitter:image" content="icon-svg/logo3.png" /> 
        <meta property="twitter:description" content="Animales,tipos de animales,clasificacion de animales y más" /> 
        <meta property="twitter:title" content="Animalia" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@400;500;600;700;800;900&family=Noto+Sans+SC:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="icon-svg/logo3.ico"/>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Box>
  )
}

Layout.defaultProps = {
  title:"Home",
  description: "Conoce la variedad de animales que existen en el mundo y todos sus tipos"
}