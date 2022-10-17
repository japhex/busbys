import { Box, Flex } from '@chakra-ui/react'

interface Props {
  title: string
  description: string
  footer?: string
}

const Hero = ({ title, description, footer }: Props) => (
  <Box px={28}>
    <Flex direction="column">
      <Box>{title}</Box>
      <Box>{description}</Box>
      <Box>{footer}</Box>
    </Flex>
  </Box>
)

export default Hero
