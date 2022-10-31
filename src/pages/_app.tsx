import { Box, ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import Footer from 'components/footer'
import Header from 'components/header'
import { theme } from 'theme'
import Fonts from 'theme/FontFamilies'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Fonts />
    <Box p={2} bg="SAND0" fontFamily="satoshi">
      <Header />
      <Component {...pageProps} />
    </Box>
    <Footer />
  </ChakraProvider>
)

export default MyApp
