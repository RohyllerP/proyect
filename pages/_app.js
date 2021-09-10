import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
function MyApp({ Component, pageProps }) {
  <ChakraProvider>
  return <Component {...pageProps} />
   </ChakraProvider>
}

export default MyApp
