import { 
Box, 
Center, 
Heading,
Button,
Stack,
Flex,
FormControl,
FormLabel,
FormErrorMessage,
FormHelperText,
Input,
Textarea,
useColorMode,
useColorModeValue,
} from "@chakra-ui/react";
import { Formik, Form, Field } from 'formik';
import Head from "next/head";

const Formulario = () => {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white","#171923");
  return(
		<Box pt="10" position="static">
		 	<Head>
  			<title>Contacto</title>
  		</Head>
				<Formik
					initialValues={{
						nombre: '',
						apellido: '',
						correo: '',
						text: '',
					}}
					validate={(valores) => {
						let errores = {};
						// nombre
						if(!valores.nombre){
							errores.nombre = 'por favor ingresa un nombre'
						} else if (!/^[a-zA-zÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
							errores.nombre = 'El nombre solo puede tener letras y espacios'
						}
						// apellido
						if(!valores.apellido){
							errores.apellido = 'por favor ingresa un apellido'
						} else if (!/^[a-zA-zÀ-ÿ\s]{1,40}$/.test(valores.apellido)){
							errores.apellido = 'El apellido solo puede tener letras y espacios'
						}
						// correo
						if(!valores.correo){
							errores.correo = 'por favor ingresa un correo electronico'
						} else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
							errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
						}
						return errores;
					}}
					onSubmit={(valores, {resetForm}) => {
						console.log(valores)
						resetForm();
						console.log('formulario enviado')
					}}

				>
					{( {values, errors,touched, handleSubmit,handleChange, handleBlur} ) => (
						<Center>
							<Box 
							bg={bg} 
							p="10" 
							mb="10" 
							borderRadius="10px" 
							>
							<Box align="center" >
									<Heading as="h1" size="2xl"  pb="10" >Formulario de contacto</Heading>
							</Box>
							<Form onSubmit={handleSubmit}>
							<Stack>
							    <Flex>
							    <FormControl id="name" w="50%" mr="5" isRequired>
									  <FormLabel>Nombre</FormLabel>
				  						<Input 
				  						type="text"
				  						name="nombre" 
				  						placeholder="Nombre"  
				  						value={values.nombre}
				  						onChange={handleChange}
				  						onBlur={handleBlur}
				  						/>
				  						{touched.nombre && errors.nombre && <Box color="red">{errors.nombre}</Box>}
								</FormControl>
								<FormControl id="apellido" w="50%" isRequired>
									<FormLabel>Apellido</FormLabel>
			  						<Input 
			  						type="text" 
			  						name="apellido"
			  						placeholder="Apellido" 
			  						value={values.apellido} 
			  						onChange={handleChange}
			  						onBlur={handleBlur}
			  						/>
			  						{touched.apellido && errors.apellido && <Box color="red">{errors.apellido}</Box>}
								</FormControl>
							  </Flex>
								<FormControl id="email" isRequired>
									<FormLabel>Correo</FormLabel>
			  						<Input 
			  						type="email" 
			  						name="correo"
			  						placeholder="Correo" 
			  						value={values.correo}
			  						onChange={handleChange}
			  						onBlur={handleBlur} 
			  						/>
			  						{touched.correo && errors.correo && <Box color="red">{errors.correo}</Box>}
								</FormControl>
								<FormControl id="text">
									<FormLabel>Comentario</FormLabel>
									<Textarea 
									type="text" 
									name="text" 
									placeholder="Comentario" 
									value={values.text}
									onChange={handleChange}
			  						onBlur={handleBlur}
			  					/>
								</FormControl>
								<Button size="xl" variant="primary" type="submit">Enviar</Button>
							</Stack>
							</Form>
					 	  </Box>
						</Center>					
					)}
				</Formik>
		</Box>
	)
}
export default Formulario;