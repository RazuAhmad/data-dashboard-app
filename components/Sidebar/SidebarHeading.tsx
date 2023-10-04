import { Stack, Typography, Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import sidebarHeaderImg from '../../public/assets/sidebar-header-logo.svg'
import slottingImg from '@/public/assets/slotting.svg'

import React from 'react'

const SidebarHeading = () => {
    return (
        <Box sx={{ borderBottom: '1px solid #525050;', padding: '24px' }}>
            {/* Sidebar header */}
            <Link href='/' className='mb-4 inline-block'>
                <Image src={sidebarHeaderImg} alt='header img' />
            </Link>
            <Stack flexDirection='row' justifyContent='space-between' sx={{ backgroundColor: '#FFFFFF0A', padding: '12px', borderRadius: '8px', cursor: 'pointer' }}>
                <Box sx={{}}>
                    <Typography variant='body1' fontFamily='Inter' sx={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>Devias</Typography>
                    <Typography variant='subtitle1' fontFamily='Inter' sx={{ color: 'gray', fontSize: '14px' }}>Production</Typography>
                </Box>

                <Image src={slottingImg} alt='slottingImg' />
            </Stack>
        </Box>
    )
}

export default SidebarHeading