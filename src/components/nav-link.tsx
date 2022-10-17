import { Text, Flex, Box } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

const NavLink = ({ page, url }: { page: string; url?: string }) => {
  const router = useRouter()
  const pageLink = url || page.toLowerCase().replaceAll(' ', '-')
  const activeLink = router.pathname === pageLink

  return (
    <NextLink href={pageLink}>
      <Box borderBottom={activeLink ? '3px solid' : ''} borderColor="busbyRed">
        <Flex align="center" h="100%">
          <Text cursor="pointer" color={activeLink ? 'busbyRed' : ''}>
            {page}
          </Text>
        </Flex>
      </Box>
    </NextLink>
  )
}

export default NavLink
