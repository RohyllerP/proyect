import 
{ Box, 
Center, 
Heading, 
useColorMode,
useColorModeValue,
Flex,
Stack,
Breadcrumb,
BreadcrumbItem,
BreadcrumbLink,
} from "@chakra-ui/react";

export default function Footer(){
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#065666","gray.800");

	return(
		<Box 
		bg={bg}
		w="100%" 
		color="white" 
		p="5"
		>
			<Center>
			  <Heading mt="5" as="h2" size="md">
                Todos los derechos reservados &copy; Rohyller Pereira
        </Heading>
			</Center>
			<Box mt="10">
			  <Center>
					<Box>
						<Breadcrumb>
							<BreadcrumbItem>
								<BreadcrumbLink href="#">
								Facebook
								</BreadcrumbLink>
							</BreadcrumbItem>

							<BreadcrumbItem>
								<BreadcrumbLink href="#">
								Instagram
								</BreadcrumbLink>
							</BreadcrumbItem>

						<BreadcrumbItem>
								<BreadcrumbLink href="#">
								Telegram
								</BreadcrumbLink>
						</BreadcrumbItem>
						</Breadcrumb>
					</Box>
        </Center> 
      </Box>  	
		</Box>
	)
}