import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'

import Hero from 'components/hero'

const CommercialInsurance: NextPage = () => (
  <Hero
    title="Commercial Insurance"
    description={
      <>
        <Box>
          Business insurance need not be a time-consuming process, it is simple when you speak to our Key Commercial
          Team. At Busby's we have Experienced Key Commercial Managers who work with you to ensure that you have the
          best commercial insurance package for your business.
        </Box>
        <ul>
          <li>A very simple process. Just pick up the phone and talk to Simon Dormer or a member of our Team.</li>
          <li>
            We offer the main commercial insurances, with optional covers, giving you the best solutions possible for
            your business.
          </li>
        </ul>
      </>
    }
    footer="If you are starting up a new business, working from home or have a renewal due, call us on 01494 441441 for a Professional and Quality Service."
  />
)

export default CommercialInsurance
