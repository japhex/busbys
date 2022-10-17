import { Box, ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import Header from 'components/header'
import { theme } from 'theme'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Box p={2} bg="SAND0" h="100vh">
      <Header />
      <Component {...pageProps} />
    </Box>
  </ChakraProvider>
)

export default MyApp
