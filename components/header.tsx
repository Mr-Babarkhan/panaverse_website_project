"use client";

import { SearchIcon, AddIcon, WarningIcon ,MoonIcon} from '@chakra-ui/icons';


import {Box,Image,List,ListItem,HStack,Button,Flex, Link, Show, Hide, useColorMode} from "@chakra-ui/react"
import { GiHamburgerMenu } from 'react-icons/gi';
import Burger from './burger/Burger';
import { ColorModeSwitcher } from './ColorModeSwitcher/ColorModeSwitcher';
import NavMenu from './nav/NavMenu';

export default function Header(){
  const { colorMode } = useColorMode();


    return(
        <>
         <Box  position='sticky' top={0} zIndex='1'>
    {/* left area */}
    <Flex justifyContent={'space-around'} alignItems={'center'} bg={colorMode=="dark" ? "black" :"white"} py={'2'}>
    <Box>
      <HStack ml={'-40px'}>
    <Image src="/images/logo1.png" alt="logo" />

  
  <Hide below='md'>
    {/* <List>
      <HStack spacing={'6'} ml={'30px'} fontWeight={'bold'}>
      <ListItem>Home</ListItem>
      <ListItem>About</ListItem>
      <ListItem>Contact</ListItem>
      </HStack>
     
    </List> */}
    <HStack spacing={10} pl="10">
      <NavMenu/>
    </HStack>
    </Hide>
    </HStack>
    </Box>
   


    {/* right area */}
    <HStack>
      <Box   pl={'15'}>
      <SearchIcon w={'25'} h={'25'} />
      </Box>
      {/* <Box   pl={'15'} > 
      <MoonIcon w={'25'} h={'25'} />
      </Box> */}
      <ColorModeSwitcher/>
      <Show   below='md'> 
      <Burger />
      </Show>

        <Link href='http://piaic.org/' target={'_blank'}>
    <Button variant={'outline'}>Go to PIAIC</Button>
    </Link>
    </HStack>
    </Flex>
   </Box>
   </>
    )
}