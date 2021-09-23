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
								<BreadcrumbLink href="https://www.facebook.com/profile.php?id=100017543351094">
								Facebook
								</BreadcrumbLink>
							</BreadcrumbItem>

							<BreadcrumbItem>
								<BreadcrumbLink href="https://www.instagram.com/rohyller_p/?hl=es">
								Instagram
								</BreadcrumbLink>
							</BreadcrumbItem>

						<BreadcrumbItem>
								<BreadcrumbLink href="https://msng.link/o/?Rohyller_P=tg">
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
