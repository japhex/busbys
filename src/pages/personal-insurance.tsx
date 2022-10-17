import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'

import Hero from 'components/hero'

const PersonalInsurance: NextPage = () => (
  <Hero
    title="Personal Insurance"
    description={
      <>
        <Box>
          Cover that is built for you, your family and your business. S G Busby work with main UK Leading Insurers to
          offer you Policies, with a wide range of covers, that are just right for you.
        </Box>
        <ul>
          <li>Personal Motor and Household Insurance, large range of products available.</li>
          <li>
            We give you professional advice on the products that best suit your needs, helping you work out the cover
            you need.
          </li>
          <li>
            We will find you the best deal comparing price and product features, giving you peace of mind that
            everything is covered.
          </li>
        </ul>
      </>
    }
    footer="If you have a renewal due, call us on 01494 441441 for a Professional and Quality Service."
  />
)

export default PersonalInsurance
