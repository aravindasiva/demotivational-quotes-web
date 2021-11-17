import {
  Box,
  Flex,
  Divider,
  Stack,
  useDisclosure,
  HStack,
  Icon,
  Link,
  LinkOverlay
} from "@chakra-ui/react"
import React from "react"
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import Text, { TextStyles } from "../Text"


export const SiteHeaderHeight = 50

const SiteHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <>
      <Box h={`${SiteHeaderHeight}px`} position="fixed" top={0} right={0} left={0} zIndex={1}>
        <Flex
          w="100%"
          h="100%"
          justify='space-between'
          alignItems="center"
          mt={8}
          pr={{ base: 4, md: 16 }}
          pl={{ base: 4, md: 16 }}
          color="black"
        >
          <Flex align="center" mr={2}>
          <LinkOverlay href="#">
            <Text color='#1d1d1d' textStyle={TextStyles.title} fontSize={25} cursor="pointer" _hover={{ color: '#D2D2D2' }}>
              Negative Space
            </Text>
            </LinkOverlay>
          </Flex>
          <Flex align="center" mr={2}>
            <HStack spacing={6}>
              <Link href="https://github.com/aravindasiva" isExternal>
                <Icon as={AiFillGithub} _hover={{ color: '#FF8A00' }} _focus={{ outline: 'none' }} _active={{ outline: 'none' }} boxSize={25} color='#D2D2D2' />
              </Link>
              <Link href="https://www.instagram.com/aravind_cva/" isExternal>
                <Icon as={AiFillInstagram} _hover={{ color: '#FF8A00' }} _focus={{ outline: 'none' }} boxSize={25} color='#D2D2D2' />
              </Link>
              <Link href="https://www.linkedin.com/in/aravindasiva/" isExternal>
                <Icon as={AiFillLinkedin} _hover={{ color: '#FF8A00' }} _focus={{ outline: 'none' }} boxSize={25} color='#D2D2D2' />
              </Link>
            </HStack>
          </Flex>

        </Flex>
      </Box>
    </>
  )
}

export default SiteHeader
