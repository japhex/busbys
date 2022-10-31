import { Box, Button, Center, Flex, Text } from '@chakra-ui/react'

import { FloatBox } from './ui/float-box'

import { IconBusbyFull, IconPhone } from 'icons'

const Footer = () => (
  <Box>
    <FloatBox>
      <Box>
        <Text fontSize={36} fontFamily="clashMedium">
          Give us a ring, we're here to help
        </Text>
        <Text pr={36}>
          Our Accident Management Team offer a reliable, fast and professional service with a dedicated 24/7 Claims
          Line. If you need last minute Insurance, give us a call.
        </Text>
      </Box>
      <Button variant="secondary">
        <Center gap={2}>
          <IconPhone fill="white" h="24px" w="24px" /> Call now
        </Center>
      </Button>
    </FloatBox>
    <Center bg="RED3" px={28} py={16} pt={44}>
      <Box>
        <Flex>
          <IconBusbyFull />
          <Text>Finding Insurance is easy with Busby's</Text>
        </Flex>
        <Box>nav items</Box>
      </Box>
      <Box>biba logo</Box>
    </Center>
  </Box>
)

export default Footer
