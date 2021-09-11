import React,{useState} from "react";
import Link from "next/link";
import { 
Input, 
Form,
FormControl, 
FormLabel, 
FormErrorMessage, 
FormHelperText,
InputGroup, 
InputRightElement,
InputLeftElement,
Button,
Center,
Flex,
Box,
Stack,
Heading,
Text,
useColorMode,
useColorModeValue,
} from "@chakra-ui/react";
import { FiLock } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { RiEyeFill,RiEyeOffFill } from 'react-icons/ri';
import Head from "next/head";

export default function LoginForm(){
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);

 	const { toggleColorMode } = useColorMode();
  	const bg = useColorModeValue("white","#171923");
  	const color = useColorModeValue("black","blue.500");
	return (
	  <Box py="20px">
	  	<Head>
  			<title>Iniciar Sesión</title>
  		</Head>
	  	<Center>
	  	<Stack boxShadow="md" bg={bg} p="20" rounded="md" >
	  		<Heading as="h1">Iniciar Sesión</Heading>
	  		<Text fontSize="lg" color="gray.600">
	  			Por favor selecciona tu correo y tu contraseña para iniciar
	  		</Text>
	  		<form action="#">
	  			<Stack my="4" spacing="6">
	  			<FormControl id="email">
		  			<InputGroup>
		  			  <InputLeftElement
					    pointerEvents="none"
					    children={<HiOutlineMail color="gray.300" />}
					   />
		  			  <Input name="email" type="email" placeholder="Correo"/>
		  			</InputGroup>
		  		</FormControl>
		  		<FormControl id="password">
		  			<InputGroup> 
		  			  <InputLeftElement
					     pointerEvents="none"
					     children={<FiLock color="gray.300" />}
					  />
				      <Input
				        pr="4.5rem"
				        type={show ? "text" : "password"}
				        placeholder="Ingrese contraseña"
				        name="password"
				      />
				      <InputRightElement mr="2">
				        <Button bg={bg}  size="sm" onClick={handleClick}>
				          {show ? <RiEyeFill fontSize="27px" color="blue.400" /> : <RiEyeOffFill fontSize="27px" color="blue.400"/> }
				        </Button>
				      </InputRightElement>
				    </InputGroup>
		  		</FormControl>
		  		<FormControl id="button">
		  			<Button
		  			colorScheme="teal" variant="outline"
				    type="submit"
				    >
				      Iniciar
				    </Button>
					  	<Box textAlign="right" pt="3">
					  		<Link href="#">
	              				<a>
	              				<Text fontSize="lg"  color={color}>
		  							¿Olvidaste la contraseña?
		  						</Text>
		  						</a>
	            			</Link>
					  	</Box>
		  		</FormControl>
		  	  </Stack>		
	  		</form>	
	  	</Stack>
	  </Center>	
	  </Box>
	  
	)
}
