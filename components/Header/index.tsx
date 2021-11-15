import {
  Box,
  Flex,
  Divider,
  Stack,
  useDisclosure,
  HStack
} from "@chakra-ui/react"
import React from "react"
import { AiFillGithub } from "react-icons/ai"
import Text, { TextStyles } from "../Text"


export const SiteHeaderHeight = 80

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
              <Text as={'a'} color='#1d1d1d' textStyle={TextStyles.title} fontSize={25} cursor="pointer" _hover={{ color: 'blue' }}>
                Negative Space
              </Text>
          </Flex>
          <Flex align="center" mr={2}>
            <HStack spacing={2}>
              <AiFillGithub size={20} color='white'/>
            </HStack>
          </Flex>


        </Flex>
      </Box>
    </>
  )
}

export default SiteHeader
