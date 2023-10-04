import { Box, Typography, Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import deviasKitPro from '@/public/assets/devias-kit-pro.png'

const MoreFeatureArea = () => {
    return (
        <Box sx={{ paddingY: "24px", paddingX: "16px" }}>
            <Typography variant='body1' sx={{ color: '#F3F4F6', fontFamily: 'Inter', fontSize: '14px' }}>Need more features?</Typography>
            <Typography variant='subtitle1' sx={{ color: "#6C737F", fontFamily: 'Inter', fontSize: '14px' }}>Check out our Pro solution template.</Typography>
            <Image src={deviasKitPro} alt='' width={160} height={136} className='object-contain' />
            <Button variant='contained'>Pro Live Preview</Button>
        </Box>
    )
}

export default MoreFeatureArea