import { Box, HStack } from '@chakra-ui/react'
import React from 'react'
import SiteHeader from '../../components/Header'
import Skull from '../../components/svg/Skull'
import TopOverlay from '../../components/svg/TopOverlay'
import Text, { TextStyles } from '../../components/Text'
import { useGetRandomQuoteQuery } from '../../generated/graphql-types'

const HomeContainer = () => {
  const {data, loading} = useGetRandomQuoteQuery()
  console.log("🚀 ~ file: index.tsx ~ line 11 ~ HomeContainer ~ data", data?.randomQuote?.id)
  console.log("🚀 ~ file: index.", process.env.NEXT_PUBLIC_SERVER_URI)


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
          <Box position='fixed' top='40%' left='10%'>
        <Text color='#fff' textStyle={TextStyles.heading} fontSize={25} maxW='60%'>{data?.randomQuote?.quote}</Text>
        <Text py={6} color='white' textStyle={TextStyles.caption} fontSize={25}>{data?.randomQuote?.author}</Text>
          </Box>
        </Box>
      </Box>
  )
}

export default HomeContainer