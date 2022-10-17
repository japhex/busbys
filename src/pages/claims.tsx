import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'

import Hero from 'components/hero'

const CommercialInsurance: NextPage = () => (
  <Hero
    title="Claims"
    description={
      <>
        <Box>By its very nature, making a claim can be stressful.</Box>
        <Box>
          S G Busby help you through this difficult time, giving you the support and help you need to make sure life
          gets back to normal as quickly and easily as possible.
        </Box>
      </>
    }
    footer="Our Personal and Professional Service is the reason why we have so many contented long-term clients."
  />
)

export default CommercialInsurance
