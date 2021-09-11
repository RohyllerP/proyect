import { Box } from "@chakra-ui/react";
import Vertebrados from "./vertebrados";
import Invertebrados from "./invertebrados";

function TiposDeAnimales(){
	return(
		<Box>
			<Vertebrados />
			<Invertebrados />
		</Box>
	)
}

export default TiposDeAnimales;