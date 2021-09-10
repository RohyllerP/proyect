import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../components/layout/index";
import { theme } from '../styles/theme/index.js';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
   </ChakraProvider>
  )
}

export default MyApp
