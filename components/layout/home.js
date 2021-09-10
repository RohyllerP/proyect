import React, { useState,useEffect } from "react";
import Link from "next/Link";
import Image from "next/image";
import { 
Box, 
Heading, 
Center, 
Button,
Spacer, 
Text, 
Flex,
Drawer,
DrawerBody,
DrawerFooter,
DrawerHeader,
DrawerOverlay,
DrawerContent,
DrawerCloseButton,
useDisclosure,
Badge,
useColorMode,
useColorModeValue, 
} from "@chakra-ui/react";
import { ImArrowDown2 } from "react-icons/im";
import imgAnimal from "../../public/img/Animalia.jpg";
import Head from "next/head";

export default function Home(){
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white","#171923");
  return(
    <Box w="100%">
      <Head>
        <title>Inicio</title>
      </Head>
      <Box>
          <Box 
          bg={bg}
          h='55vh' 
          display="flex" 
          alignItems= "center" 
          justifyContent= "center"> 
            <Heading 
              as="h2" 
              size="2xl" 
              fontSize={{ base: "29px", md: "40px", lg: "56px" }}
              textAlign="center"
              >
              Las mejores imagenes <Text color="#065666">de animales </Text>
            </Heading>
          </Box>
      </Box>
    <Box>
      <Box py="10" >
          // card animal
      </Box>
      <Box w="100%">
        <Box>
        <Flex bg={bg} p="5"  justify="center">
          <Box width="80rem">
          <Heading as="h2" pb="3">Animalia 
            <Badge ml="3" mt="-2" fontSize="0.4em" colorScheme="green">
              New
            </Badge>
          </Heading>
          <Text textAlign="justify">
            En la clasificación científica de los seres vivos, los animales (Animalia) o
            metazoos (Metazoa) constituyen un reino que reúne un amplio grupo de organismos
            que son eucariotas, heterótrofos, pluricelulares y tisulares (excepto los 
            poríferos). Se caracterizan por su amplia capacidad de movimiento, por no 
            tener cloroplasto (aunque hay excepciones, como en el caso de Elysia chlorotica) 
            ni pared celular, y por su desarrollo embrionario; que atraviesa una fase de 
            blástula y determina un plan corporal fijo (aunque muchas especies pueden sufrir
            una metamorfosis posterior como los artrópodos). Los animales forman un grupo 
            natural estrechamente emparentado con los hongos (reino Fungi). Animalia es uno 
            de los cinco reinos del dominio Eukaryota, y a él pertenece el ser humano. La 
            parte de la biología que estudia los animales es la zoología.
          </Text>
          </Box> 
          <Box 
          width="400px" 
          display={['none','none','none','flex','flex','flex']}
          borderWidth="2px" 
          rounded="md"
          borderColor="gray.400" 
          ml="2"
          mt="3"
          >
            <Image src={imgAnimal} width={600} height={100} alt="Imagen de animal"/>
          </Box> 
        </Flex>
       </Box>  
      </Box>
      <Box p="10">
        <Box>
          <Heading as="h3" pb="3"><Text as="u">Tipos de animales</Text></Heading>
        </Box>
      </Box>
    </Box>
  </Box>
  )
}
