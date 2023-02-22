import { Box, Center, Container, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/Ai';
import { BsFacebook } from 'react-icons/Bs';
import { FaDiscord } from 'react-icons/Fa';
export default function Footer() {
  return (
    <>
   
   <Box mt={'40px'} ml='30px'>
            <Text >© 2023 Panaverse. All rights reserved</Text>
        </Box>
    
       
        
        
 
       <HStack mt='-20px' float='right' mr={30} >
        <Box alignItems={'center'} >
        <AiFillGithub size={20} />
       </Box>
       <Box >
       <BsFacebook size={20}/>
       </Box>
       <Box >
        <FaDiscord size={20}/>
       </Box>
       <Box >
      <AiOutlineInstagram size={20}/>
       </Box>

       </HStack>
    </>
  )
}
