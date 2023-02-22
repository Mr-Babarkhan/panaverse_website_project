"use client";

import { SearchIcon, AddIcon, WarningIcon ,MoonIcon} from '@chakra-ui/icons';


import {Box,Image,List,ListItem,HStack,Button,Flex, Link} from "@chakra-ui/react"


export default function Header(){
    return(
        <>
         <Box pt={2} backgroundPosition='fixed'>
    {/* left area */}
    <Flex justifyContent={'space-around'} alignItems={'center'}>
    <Box>
      <HStack ml={'-40px'}>
    <Image src="/images/logo1.png" alt="logo" />
    <List>
      <HStack spacing={'6'} ml={'30px'} fontWeight={'bold'}>
      <ListItem>Home</ListItem>
      <ListItem>About</ListItem>
      <ListItem>Contact</ListItem>
      </HStack>
     
    </List>
    </HStack>
    </Box>
   


    {/* right area */}
    <Box>
      <Box pt={5} as="span" pl={'15'}>
      <SearchIcon w={'25'} h={'25'} />
      </Box>
      <Box pt={5} as="span" pl={'15'} paddingRight="15px"> <MoonIcon w={'25'} h={'25'} /></Box>
   

        <Link href='http://piaic.org/' target={'_blank'}>
    <Button variant={'outline'}>Go to PIAIC</Button>
    </Link>
    </Box>
    </Flex>
   </Box>
   </>
    )
}