import { Box, Center, HStack, Icon, Link } from '@chakra-ui/react'
import React from 'react'
import SiteHeader from '../../components/Header'
import DontClick from '../../components/svg/DontClick'
import Skull from '../../components/svg/Skull'
import TopOverlay from '../../components/svg/TopOverlay'
import Text, { TextStyles } from '../../components/Text'
import { GetRandomQuoteDocument, useGetRandomQuoteQuery } from '../../generated/graphql-types'
import { AnimatePresence, motion } from "framer-motion"
import SkullShadow from '../../components/svg/SkullShadow'
import { FaHeartBroken } from 'react-icons/fa'

const HomeContainer = () => {
  const { data, loading, refetch: randomQuoteRefetch } = useGetRandomQuoteQuery()

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
        <Box zIndex={1} w='100vw' minH={10} position='fixed' bottom={0}>
          <Center>
            <HStack>
              <Text textStyle={TextStyles.caption} fontSize={10} color='#d2d2d2'>Made with</Text>
              <Link href="/secret">
                <Icon as={FaHeartBroken} _hover={{ color: 'red' }} _focus={{ outline: 'none' }} _active={{ outline: 'none' }} boxSize={3} color='#D2D2D2' />
              </Link>              <Link href="https://github.com/aravindasiva" isExternal>
                <Text textStyle={TextStyles.caption} fontSize={10} _hover={{ color: '#FF8A00' }} color='#d2d2d2'>Aravind Cva</Text>
              </Link>
            </HStack>
          </Center>
        </Box>
        <Box>
          <Box position='fixed' top='12%' right={0}>
            <Skull />
            <Center >
              <SkullShadow />
            </Center>
          </Box>
          <Box position='fixed' top='40%' left='10%'>
            {data &&
              <>
                <AnimatePresence exitBeforeEnter>
                  <motion.div
                    key={data?.randomQuote?.id}
                    animate={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -90 }}
                    exit={{ opacity: 0, x: 70 }}
                    transition={{ duration: 0.9 }}
                  >
                    <Text color='#D2D2D2' textStyle={TextStyles.heading} fontSize={28} maxW='60%'>{data?.randomQuote?.quote}</Text>
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
              </>
            }
            <Box py={10}>
              <motion.button whileTap={{ scale: 0.8 }} transition={{ type: "spring", stiffness: 200 }} onClick={() => onDontClick()}>
                <DontClick />
              </motion.button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box >
  )
}

export default HomeContainer