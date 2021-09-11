import { 
Box, 
Heading, 
Center, 
Button,
Spacer, 
Text, 
Flex,
useColorMode,
useColorModeValue,
} from "@chakra-ui/react";
import DataDos from "./datosDos.js";

function Animales({TextTitulo,TextP,TextEjem}){
	const { toggleColorMode } = useColorMode();
	const bg = useColorModeValue("white","#171923");
	return(
		<Box p="5" my="10" bg={bg} w={['100%','100%','100%','90%','90%','90%']}>
		  <Box>
			<Text fontWeight="600" fontSize="30px">{TextTitulo}</Text>
			<Text textAlign="justify">{TextP}</Text>
			<Text fontWeight="600" textAlign="justify">{TextEjem}</Text>
		  </Box>
		</Box>
	)
}
function Invertebrados(){
	return(
		<Box>
		  <Box pt="5" w={['100%','100%','100%','80%','90%','90%']}>
		  	<Heading as="h3" size="lg">Invertebrados</Heading>
		  	<Text textAlign="justify">
              Se conoce como animales invertebrados al conjunto de las especies del reino 
              animal que no poseen un notocordio o cuerda dorsal, ni una columna vertebral, 
              ni un esqueleto interno articulado. En este conjunto se encuentran el 95% de 
              las especies vivas conocidas, entre 1,7 y 1,8 millones de especies
            </Text>
		  </Box>
		{
			DataDos.map((postdata) => (
				<Box key={postdata.id}>
					<Animales 
					TextTitulo={postdata.TextTitulo}
					TextEjem={postdata.TextEjemplo}
					/>
				</Box>
			))
		}
		</Box>
	)
}

export default Invertebrados;