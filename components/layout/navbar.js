import React, { useState } from "react";
import { 
Box, 
Flex, 
Spacer, 
Button,
Heading, 
IconButton,
Icon, 
Drawer,
DrawerBody,
DrawerFooter,
DrawerHeader,
DrawerOverlay,
DrawerContent,
DrawerCloseButton,
useDisclosure,
useColorMode,
useColorModeValue,} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import {FaUserCircle} from "react-icons/fa";
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar(){
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#065666","gray.800");
  const bgTwo = useColorModeValue("blue.400","gray.800");

	return(
	<Flex p="5" bg={bg} color="white">
      <Box>
        <Heading 
        as="h2" 
        cursor="pointer"
        mt={['5px','10px','0','0']}>Maskup</Heading>
      </Box>
      <Spacer />
      <Flex display={['none','none','flex','flex']}>
            <Box px="5" pt="2">
                <Link href="/">
                  <a>Inicio</a>
                </Link>
            </Box>
            <Box px="5" pt="2">
                <Link href="/contacto">
                  <a>Contacto</a>
                </Link>
            </Box>
            <Box px="5" pt="2">
                <Link href="#">
                  <a>Servicio</a>
                </Link>
            </Box>
            <Box px="2" pt="2">
                <Link href="#">
                  <a><FaUserCircle size="28px"/></a>
                </Link>
            </Box>
            <Box>
              <IconButton
              icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
              bg={bg}
              isRound='true'
              size='lg'
              color="colors.secondary"
              onClick={toggleColorMode}
            />
            </Box>
      </Flex>
      <Button 
      ref={btnRef} 
      colorScheme="teal" 
      onClick={onOpen}
      display={['flex','flex','none','none']}>
        Open
      </Button>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="md">
        <DrawerOverlay/>
        <DrawerContent bg={bgTwo}>
          <DrawerCloseButton mt="2"/>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
          <Box>
              <Box py="25px">
                <Link href="/">
                  <a>Inicio</a>
                </Link>
              </Box>
              <Box py="25px">
                  <Link href="/contacto">
                    <a>Contacto</a>
                  </Link>
              </Box>
              <Box py="25px">
                  <Link href="#">
                    <a>Servicio</a>
                  </Link>
              </Box>
              <Box py="25px">
                  <Link href="#">
                    <a><FaUserCircle size="28px" /></a>
                  </Link>
              </Box>  
              <Box>
                <IconButton
                icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
                isRound='true'
                size='lg'
                alignSelf='flex-end'
                color="colors.secondary"
                onClick={toggleColorMode}
              />
              </Box>   
          </Box>     
          </DrawerBody>
        </DrawerContent>
        </Drawer>
  </Flex>
	)
}