import { List, Stack, useColorMode } from '@chakra-ui/react'
import Link from 'next/link';
import React from 'react'

export default function NavMenu() {
    const {colorMode} =useColorMode();
  return (
    <>
    <List fontWeight={"bold"} color={colorMode=="light"? "#4A5568" : "white"} >
        <Stack direction={{base:"column" ,md:"row"}} align={{base:"left",md:"center"}}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="#">Contact</Link>
        </Stack>
    </List>
    </>
  )
}
