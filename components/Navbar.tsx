'use client'

import React from 'react'
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Stack } from '@mui/material';
import Image from 'next/image';
import UserProfileArea from './UserProfileArea';

const Navbar = () => {
    return (
        <nav className=''>
            <Stack flexDirection='row' justifyContent='space-between' alignItems='center' sx={{ paddingX: "16px", paddingY: '16px' }} >
                <Button sx={{ borderRadius: '100%' }}><SearchIcon sx={{ fontSize: '1.50rem', color: 'gray' }} /></Button>
                <UserProfileArea />
            </Stack>
        </nav>
    )
}

export default Navbar