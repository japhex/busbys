import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Center, Flex, Grid, GridItem, Link, Tag, Text } from '@chakra-ui/react'
import { PortableText } from '@portabletext/react'
import type { NextPage } from 'next'

import Hero from 'components/hero'
import { Card } from 'components/ui/card'
import { FloatBox } from 'components/ui/float-box'
import { client, textComponents, urlFor } from 'utils/sanity'

interface Props {
  homepage: Record<string, any>
}

const Home: NextPage = ({ homepage }: Props) => (
  <Box>
    <Hero title={homepage.heroTitle} description={homepage.heroContent} />
    <Flex justify="end" px={28}>
      <FloatBox
        contentBg="RED3"
        styles={{ color: 'WHITE', width: '40vw', marginRight: 64, fontFamily: 'clashMedium', fontSize: '18px' }}
      >
        Personal and Commercial Insurance products for you, your family, and your business
      </FloatBox>
    </Flex>
    <Box bg="WHITE" px={28} py={16}>
      <Grid templateColumns="1.3fr 1.5fr" alignItems="center">
        <GridItem>
          <Text fontSize="60px" fontFamily="clashMedium">
            {homepage.sectionOneTitle}
          </Text>
        </GridItem>
        <GridItem pt={20}>{homepage.sectionOneContent}</GridItem>
      </Grid>
    </Box>
    <Center px={28} py={16} flexDirection="column" gap={4}>
      <Tag px={6}>Services</Tag>
      <Flex direction="column" gap={4}>
        <Text fontFamily="clashMedium" fontSize="36px" color="RED3" textAlign="center" lineHeight="42px">
          {homepage.servicesTitle}
        </Text>
        <Text textAlign="center" fontSize="20px">
          {homepage.servicesContent}
        </Text>
      </Flex>
    </Center>
    <Grid px={28} py={16} pt={0} gap={9} templateColumns="auto auto auto">
      {homepage.services?.map(service => (
        <Card>
          <Flex direction="column" gap={7}>
            {/* @ts-ignore */}
            <img src={urlFor(service.image)} alt={service.title} />
            <Text fontSize={24} fontFamily="satoshiBold">
              {service.title}
            </Text>
            <Box>
              <PortableText value={service.description} components={textComponents} />
            </Box>
          </Flex>
        </Card>
      ))}
    </Grid>
    <Center bg="SAND2" px={28} py={16} pb={48} flexDirection="column">
      <Tag>For 24/7 Online Quotes</Tag>
      <Grid px={28} py={16} gap={9} templateColumns="auto auto auto">
        {homepage.quotes.map(quote => (
          <Card>
            {/* @ts-ignore */}
            {quote.icon && <img src={urlFor(quote.icon)} alt={quote.title} />}
            <Text>{quote.title}</Text>
            <Link isExternal href={quote.link}>
              <Flex gap={2} align="center">
                View details <ExternalLinkIcon />
              </Flex>
            </Link>
          </Card>
        ))}
      </Grid>
      <Text fontSize={11}>{homepage.quotesNote}</Text>
    </Center>
  </Box>
)

export async function getStaticProps() {
  const [homepage] = await client.fetch(`*[_type == "homepage"]`)

  return {
    props: {
      homepage,
    },
  }
}
export default Home
