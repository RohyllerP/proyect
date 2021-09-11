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
import Data from "./datos.js";

function Animales({TextTitulo,TextP,TextEjem}){
	const { toggleColorMode } = useColorMode();
	const bg = useColorModeValue("white","#171923");
	return(
		<Box p="5" my="10" bg={bg} w="100%">
		  <Box>
			<Text fontWeight="600" fontSize="30px">{TextTitulo}</Text>
			<Text textAlign="justify">{TextP}</Text>
			<Text fontWeight="600" textAlign="justify">{TextEjem}</Text>
		  </Box>
		</Box>
	)
}
function Vertebrados(){
	return(
		<Box>
		  <Box pt="5" w="100%">
		  	<Heading as="h3" size="lg">Vertebrados</Heading>
		  	<Text textAlign="justify">
               Los animales vertebrados son aquellos dotados de una espina dorsal o 
               columna vertebral, que divide al cuerpo en dos mitades idénticas 
               (simetría bilateral). Normalmente su cuerpo puede sectorizarse en 
               cabeza, tronco (tórax y abdomen) y cola
            </Text>
		  </Box>
		{
			Data.map((postdata) => (
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

export default Vertebrados;