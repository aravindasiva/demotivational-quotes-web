import { Box, HStack } from '@chakra-ui/react'
import React from 'react'
import SiteHeader from '../../components/Header'
import Skull from '../../components/svg/Skull'
import TopOverlay from '../../components/svg/TopOverlay'
import Text, { TextStyles } from '../../components/Text'

const HomeContainer = () => {
  return (
      <Box zIndex={0} h='100vh' bg='#1D1D1D'>
        <Box position='fixed' top={0} left={0}>
          <TopOverlay />
        </Box>
        <Box position='absolute' top={0}>
          <SiteHeader />
          <Box position='fixed' right={0}>
            <Skull/>
          </Box>
          <Box position='fixed' top='45%' left='10%'>
        <Text color='#fff' textStyle={TextStyles.heading} fontSize={25} maxW='60%'> If at first you don't succeed, try, try again. Then quit. No use being a damn fool about it.</Text>
        <Text py={6} color='white' textStyle={TextStyles.caption} fontSize={25}> - Siva</Text>
          </Box>
        </Box>
      </Box>
  )
}

export default HomeContainer