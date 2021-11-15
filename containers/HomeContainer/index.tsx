import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import SiteHeader from '../../components/Header'
import Skull from '../../components/svg/Skull'
import TopOverlay from '../../components/svg/TopOverlay'

const HomeContainer = () => {
  return (
    <>
      <Box zIndex={0} h='100vh' w='full' bg='#1D1D1D'>
        <Box position='fixed' top={0} left={0}>
          <TopOverlay />
        </Box>
        <Box position='absolute' top={0}>
          <SiteHeader />
        </Box>
      </Box>
      <Skull />
    </>
  )
}

export default HomeContainer