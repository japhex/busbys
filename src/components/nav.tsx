import { Button, Flex } from '@chakra-ui/react'

import NavLink from './nav-link'

import { IconPhone } from 'icons'

const Nav = () => (
  <Flex position="sticky" gap="32px" align="stretch">
    <NavLink page="Home" url="/" />
    <NavLink page="About" url="/about-us" />
    <NavLink page="Services" url="/personal-insurance" />
    <NavLink page="Claims" url="/claims" />
    <NavLink page="Careers" url="/careers" />
    <NavLink page="Contact" url="/contact-us" />
    <Button bg="busbyRed" _hover={{ background: 'busbyRed' }} h="72px" w="72px">
      <IconPhone fill="white" h="24px" w="24px" />
    </Button>
  </Flex>
)

export default Nav
