'use client'

import React from 'react'
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import SidebarHeading from './SidebarHeading';
import SidebarMenuArea from './SidebarMenuArea';
import MoreFeatureArea from './MoreFeatureArea';


const Sidebar = () => {
    return (
        <Box sx={{ backgroundColor: 'rgb(28, 37, 54)', height: '100vh', overflowY: 'auto', position: 'fixed', left: 0, top: 0 }}>
            <Stack flexDirection='column' >
                <SidebarHeading />
                <SidebarMenuArea />
                <MoreFeatureArea />
            </Stack>
        </Box>
    )
}

export default Sidebar