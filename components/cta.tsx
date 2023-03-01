import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsFacebook } from 'react-icons/Bs';
export default function CTA() {
  return (
    <>
      <Box >
        <Container maxW={1000} bg={'blue.50'} p={"30px"} mt={10} >
          <Stack display={{base:"column",md:"row"}} >
          <Box w={'50%'}>
          <Heading >Try our free components</Heading>
          <Text fontSize={'18px'} lineHeight='7' pt={'5'}>
            You don't have to buy a pig in a poke - you can experience our free
            community components before making a purchase decision.
          </Text>
          </Box>

          <Box flex={2} alignSelf={{base:'center',md:'flex-start'}}>
            <Button colorScheme={'blue'} float='right' >View Components</Button>
          </Box>
          </Stack>
        </Container>
        
      </Box>
    </>
  );
}
