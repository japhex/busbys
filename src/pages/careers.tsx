import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'

import Hero from 'components/hero'

const CommercialInsurance: NextPage = () => (
  <Hero
    title="Careers"
    description={
      <>
        <Box>Are you Customer-Focused and Passionate about delivering an excellent service to customers?</Box>
        <Box>
          This is a Great Opportunity to join a small dedicated team providing broking and administration services to
          clients
        </Box>
      </>
    }
    footer="If you are starting up a new business, working from home or have a renewal due, call us on 01494 441441 for a Professional and Quality Service."
  />
)

export default CommercialInsurance
