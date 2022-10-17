import { Box, Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'

import Hero from 'components/hero'

const Home: NextPage = () => (
  <Box>
    <Hero
      title="Finding Insurance is east with Busby's"
      description="We offer practical solutions designed to support personal and business insurance customers. We work closely with our network of Leading UK Insurance Providers who are constantly developing new initiatives to meet evolving client demands, to provide cost-effective insurance policies."
    />
    <Box bg="WHITE">
      <Flex>
        <Box>We keep ahead of the industry trends</Box>
        <Box>
          Our team of brokers are experienced insurance professionals, trained to understand your unique needs, to
          formulate the perfect insurance cover. We continue to seek out partner companies who give the broadest price
          comparison, for a superb range of personal and business insurance products.
        </Box>
      </Flex>
    </Box>
  </Box>
)

export default Home
