import {Box,Image,List,ListItem,HStack,Button,Flex, Link, Show, Hide} from "@chakra-ui/react"
import { GiHamburgerMenu } from 'react-icons/gi';
import {useDisclosure, Drawer,DrawerOverlay,DrawerContent,DrawerCloseButton,DrawerHeader,DrawerBody,Input,DrawerFooter } from "@chakra-ui/react";
import NavMenu from "../nav/NavMenu";
import React from "react";

export default function Burger() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        {/* <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Open
        </Button> */}
        <Box onClick={onOpen}>
            <GiHamburgerMenu size={25}/>
        </Box>

            <Drawer isOpen={isOpen} placement={'right'} onClose={onClose}>
        
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Panaverse</DrawerHeader>
  
            <DrawerBody>
              <NavMenu/>
            </DrawerBody>
  
            <DrawerFooter>
             <Image width={100} height={51} src="/images/red.png"></Image>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }