import LoginForm from "../../components/loginForm/loginForm";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

export default function index(){
	return(
		<Box>
			<Head>
	  			<title>Iniciar Sesión</title>
	  		</Head>
			<LoginForm />
		</Box>
	)
}