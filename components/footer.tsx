
import { Box, Center, Container, Flex, HStack, Text } from '@chakra-ui/react'
import Link from 'next/link';
import React from 'react'
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/Ai';
import { BsFacebook } from 'react-icons/Bs';
import { FaDiscord } from 'react-icons/Fa';
export default function Footer() {
  return (
    <>
   
        <Box>
          <Container maxW={'100%'} bg='gray.200' py={'5'}>
            <Flex justifyContent={'space-around'}>
            <Text >© 2023 Panaverse. All rights reserved</Text>

           <HStack>
            <Box pl="15" as='span'>
            <Link href={'https://github.com/Mr-Babarkhan'} target='_blank'>
            <AiFillGithub size={20} />
            </Link>
            </Box>
            <Box pl="15" as='span'>
            <Link href={'https://facebook.com'} target='_blank'>
            <BsFacebook size={20}/>
            </Link>
            </Box>
           <Box pl="15" as='span'>
           <Link href={'https://discord.com'} target='_blank'>
           <FaDiscord size={20}/>
          </Link>
           </Box>
            
           <Box pl="15" as='span'>
           <Link href={'https://instagram.com'} target='_blank'>
           <AiOutlineInstagram size={20}/>
          </Link>
           </Box>
            </HStack>
            </Flex>
          </Container>
        </Box>



  
      
    </>
  )
}
