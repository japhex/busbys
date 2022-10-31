import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Flex, Link } from '@chakra-ui/react'
import { PortableTextComponents } from '@portabletext/react'
import imageUrlBuilder from '@sanity/image-url'
import { createClient } from 'next-sanity'
import NextLink from 'next/link'

export const client = createClient({
  projectId: 'ur4trijj',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export const urlFor = source => builder.image(source)

export const textComponents: PortableTextComponents = {
  types: {
    callToAction: ({ value }) => (
      <Link href={value.url} isExternal>
        {value.text}
      </Link>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const internal = value.href.startsWith('/')

      return (
        <Link href={value.href} isExternal={!internal} as={internal ? NextLink : 'a'}>
          <Flex gap={2} align="center">
            {children} {!internal && <ExternalLinkIcon />}
          </Flex>
        </Link>
      )
    },
  },
}
