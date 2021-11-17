import { Box, Center, HStack } from '@chakra-ui/react'
import React from 'react'
import SiteHeader from '../../components/Header'
import DontClick from '../../components/svg/DontClick'
import Skull from '../../components/svg/Skull'
import TopOverlay from '../../components/svg/TopOverlay'
import Text, { TextStyles } from '../../components/Text'
import { GetRandomQuoteDocument, useGetRandomQuoteQuery } from '../../generated/graphql-types'
import { AnimatePresence, motion } from "framer-motion"
import SkullShadow from '../../components/svg/SkullShadow'

const HomeContainer = () => {
  const { data, loading, refetch: randomQuoteRefetch } = useGetRandomQuoteQuery()
  console.log("🚀 ~ file: index.tsx ~ line 11 ~ HomeContainer ~ data", data?.randomQuote?.id)
  console.log("🚀 ~ file: index.", process.env.NEXT_PUBLIC_SERVER_URI)

  const onDontClick = async () => {
    randomQuoteRefetch()
  }


  return (
    <Box zIndex={0} h='100vh' bg='#1D1D1D'>
      <Box position='fixed' top={0} left={0}>
        <TopOverlay />
      </Box>
      <Box position='absolute' top={0}>
        <SiteHeader />
        <Box position='fixed' top='5%' right={0}>
          <Skull />
          <Center >
            <SkullShadow />
          </Center>
        </Box>
        <Box position='fixed' top='40%' left='10%'>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={data?.randomQuote?.id}
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -90 }}
              exit={{ opacity: 0, x: 70 }}
              transition={{ duration: 0.9 }}
            >
              <Text color='#D2D2D2' textStyle={TextStyles.heading} fontSize={25} maxW='60%'>{data?.randomQuote?.quote}</Text>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={data?.randomQuote?.id}
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 70 }}
              exit={{ opacity: 0, x: -70 }}
              transition={{ duration: 0.9 }}
            >
              <Text py={6} color='#D2D2D2' textStyle={TextStyles.caption} fontSize={25}>{`- ${data?.randomQuote?.author}`}</Text>
            </motion.div>
          </AnimatePresence>
          {/* <Box as={'button'}> */}
          <motion.button whileTap={{ scale: 0.8 }} transition={{ type: "spring", stiffness: 200 }} onClick={() => onDontClick()}>
            <DontClick />
          </motion.button>
          {/* </Box> */}
        </Box>
      </Box>
    </Box >
  )
}

export default HomeContainer