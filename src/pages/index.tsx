import { Box, Center, Flex, Tag, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'

import Hero from 'components/hero'
import { client, urlFor } from 'utils/sanity'

const Home: NextPage = ({ homepage }) => (
  <Box>
    <Hero title={homepage.heroTitle} description={homepage.heroContent} />
    <Box bg="WHITE">
      <Flex>
        <Box>{homepage.sectionOneTitle}</Box>
        <Box>{homepage.sectionOneContent}</Box>
      </Flex>
    </Box>
    <Center>
      <Tag>Services</Tag>
      <Text>{homepage.servicesTitle}</Text>
      <Text>{homepage.servicesContent}</Text>
    </Center>
    <Box>
      {homepage.services?.map(service => (
        <Box>
          <img src={urlFor(service.image)} alt={service.title} />
          <Text>{service.title}</Text>
          <Text>{service.description}</Text>
        </Box>
      ))}
    </Box>
  </Box>
)

export async function getStaticProps() {
  const homepage = await client.fetch(`*[_type == "homepage"]`)

  return {
    props: {
      homepage: homepage[0],
    },
  }
}
export default Home
