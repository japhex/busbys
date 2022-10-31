import { Box, Flex, Text } from '@chakra-ui/react'

interface Props {
  title: string
  description: string
  footer?: string
}

const Hero = ({ title, description, footer }: Props) => (
  <Box px={28} pt={16} pb={40}>
    <Flex direction="column">
      <Box>
        <Text fontFamily="clashMedium" color="busbyRed" fontSize="100px">
          {title}
        </Text>
      </Box>
      <Box>{description}</Box>
      <Box>{footer}</Box>
    </Flex>
  </Box>
)

export default Hero
