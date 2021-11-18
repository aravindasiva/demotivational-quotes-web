import { Box, Image, Center, HStack, Icon, Link, VStack, Button } from '@chakra-ui/react'
import React from 'react'
import { FaHeartBroken } from 'react-icons/fa'
import Text, { TextStyles } from '../components/Text'

const Custom404 = () => {

  return (
    <Box zIndex={0} h='100vh' w='vw' bg='#1D1D1D'>
      <Center>
        <VStack>
          <Box
            boxSize="md"
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
          >
            <Image borderRadius='xl' src="cat-working.gif" alt="Working-cat" />
          </Box>
          <Box>
            <Text textStyle={TextStyles.heading} fontSize={30} color='#FF8A00'>404 !! Cyber Cat is busy adding new page</Text>
          </Box>
          <Link p={4} href="/">
            <Button bg='#ff8a00'>Go Home</Button>
          </Link>
          <Box zIndex={1} position='fixed' bottom={5}>
            <HStack>
              <Text textStyle={TextStyles.caption} fontSize={10} color='#d2d2d2'>Made with</Text>
              <Link href="/secret">
                <Icon as={FaHeartBroken} _hover={{ color: 'red' }} _focus={{ outline: 'none' }} _active={{ outline: 'none' }} boxSize={3} color='#D2D2D2' />
              </Link>              <Link href="https://github.com/aravindasiva" isExternal>
                <Text textStyle={TextStyles.caption} fontSize={10} _hover={{ color: '#FF8A00' }} color='#d2d2d2'>Aravind Cva</Text>
              </Link>
            </HStack>
          </Box>
        </VStack>
      </Center>
    </Box >
  )
}

export default Custom404