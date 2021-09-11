import {Box,Heading,chakra,Text,Stack,Center}  from "@chakra-ui/react";
import Head from "next/head";
function Servicios(){
  return(
    <Box bgImage="img/servicio.jpg" backgroundPosition="center" p="10">
      <Box color="white">
      <Head>
        <title>Servicios</title>
      </Head>
          <Heading 
          as="h1" 
          fontSize={{ base: "26px", md: "36px", lg: "50px" }}
          mb="10">Herramientas utilizadas</Heading>
          <Box>
            <Stack fontSize="22px" ml="7">
              <chakra.ol>
                <chakra.li>
                  <Text>
                    <Text as="ins">Frameworks:</Text> Next JS y React JS
                  </Text>
                </chakra.li>
                <chakra.li>
                  <Text><Text as="ins">Iconos:</Text> Font Awesome y React-Icons </Text>
                </chakra.li>
                <chakra.li>
                  <Text><Text as="ins">Imagenes Gratis:</Text> Pixabay y Pexels </Text>
                </chakra.li>
                <chakra.li>
                  <Text><Text as="ins">Frameworks de CSS:</Text> Chakra UI </Text>
                </chakra.li>
                <chakra.li>
                  <Text><Text as="ins">Otras dependendicias:</Text> formik, react-redux, react-use-disclosure 
                  y GSAP</Text>
              </chakra.li>
            </chakra.ol>
            </Stack>
          </Box>
          <Heading 
          as="h2" 
          fontSize={{ base: "26px", md: "36px", lg: "50px" }}
          mb="10" mt="5">Navegadores utilizados</Heading>
          <Box>
            <Stack fontSize="22px">
              <Text>Google Chrome</Text>
              <Text>Opera GX</Text>
              <Text>Firefox</Text>
            </Stack>
          </Box>
        </Box>    
    </Box>
  )
}

export default Servicios;