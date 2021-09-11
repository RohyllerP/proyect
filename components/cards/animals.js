import { Box, Heading, Text, Center, Flex, Grid,Wrap,Skeleton, } from "@chakra-ui/react";
import image1 from "../../public/img/mono.jpg";
import image2 from "../../public/img/perro.jpg";
import image3 from "../../public/img/gato.jpg";
import image4 from "../../public/img/elefante.jpg";
import image5 from "../../public/img/rinoceronte.jpg";
import image6 from "../../public/img/loro.jpg";
import image7 from "../../public/img/jirafa.jpg";
import image8 from "../../public/img/Leon.jpg";
import image9 from "../../public/img/mapache.jpg";
import Image from "next/image";
import Link from "next/link";

const animals = [
	{
		id: 1,
		title:'Mono',
		image:image1,
		alt: 'Mono',
	},
	{
		id: 2,
		title:'Perro',
		image:image2,
		alt: 'Perro',
	},
	{
		id: 3,
		title:'Gato',
		image:image3,
		alt: 'Gato',
	},
	{
		id: 4,
		title:'Elefante',
		image:image4,
		alt: 'Elefante',
	},
	{
		id: 5,
		title:'Rinoceronte',
		image:image5,
		alt: 'Rinoceronte',
	},
	{
		id: 6,
		title:'Loro',
		image:image6,
		alt: 'Loro',
	},
	{
		id:7,
		title:'Jirafa',
		image:image7,
		alt:'Jirafa',
	},
	{
		id:8,
		title:'Leon',
		image:image8,
		alt:'Leon',
	},
	{
		id:9,
		title:'Mapache',
		image:image9,
		alt:'Mapache',
	},
]
function Card({title,imageSource,imgAlt,url}){
	return(
		<Box p="2">
		  	<Box 
		  	maxW="sm" 
		  	borderWidth="2px" 
		  	rounded="md"
		  	borderColor="gray.400" 
		  	boxShadow="dark-lg"
		  	cursor="pointer"
		  	>
			  	<Box>
				  <Image src={imageSource} width={400} height={300}  alt={imgAlt} />
				</Box>
				<Box rounded="base">
					<Link href="https://pixabay.com/es/">
			  		<a target="_blank">
				      <Center pb="2">
						<Heading as="h3" fontSize={{ base: "23px", md: "28px", lg: "32px" }}>{title}</Heading>
					  </Center>
			  		</a>
			  	</Link>	
				</Box>
			</Box>	
		</Box>
	)
}
function CardAnimal(){
	return(
		<Box>
	      <Flex flexWrap="wrap" justifyContent="center"> 
	      	{
		        animals.map((animal) => (
		            <Box key={animal.id}>
		                <Card 
		                title={animal.title} 
		                imageSource={animal.image} 
		                imgAlt={animal.alt}
		                />
		            </Box>
		        ))
    	 	}   
	      </Flex>	
		</Box>
	)
}

export default CardAnimal;