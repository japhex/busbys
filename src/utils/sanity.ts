import imageUrlBuilder from '@sanity/image-url'
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'ur4trijj',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export const urlFor = source => builder.image(source)
