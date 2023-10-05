import { Box, Typography, Button, Stack } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import deviasKitPro from '@/public/assets/devias-kit-pro.png'
import proLivePreview from '@/public/assets/menuIcons/pro-live-preview.svg'

const MoreFeatureArea = () => {
    return (
        <Stack gap='9px' alignItems={'center'} sx={{ paddingY: "24px", paddingX: "16px" }}>
            <Stack alignItems='flex-start'>
                <Typography variant='body1' sx={{ color: '#F3F4F6', fontFamily: 'Inter', fontSize: '14px' }}>Need more features?</Typography>
                <Typography variant='subtitle1' sx={{ color: "#6C737F", fontFamily: 'Inter', fontSize: '14px' }}>Check out our Pro solution template.</Typography>
            </Stack>
            <Image src={deviasKitPro} alt='' width={160} height={136} className='object-contain' />
            <button className='w-[85%] px-6 py-3 bg-[#6366F1] hover:bg-blue-800 mt-4 flex justify-center items-center gap-2 rounded-xl'>
                <Box component='span' fontFamily='Inter' fontSize='14px' color='#FFFFFF'>Pro Live Preview</Box>
                <Image src={proLivePreview} alt='icon' width={20} height={20} />
            </button>
        </Stack>
    )
}

export default MoreFeatureArea