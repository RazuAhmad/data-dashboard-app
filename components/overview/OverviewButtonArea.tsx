import { Button, Stack } from '@mui/material'
import Image from 'next/image'
import arrowSideImg from '@/public/assets/overview-icons/arrow-side.svg'

const OverviewButtonArea = () => {
    return (
        <Stack flexDirection={'row'} justifyContent={'flex-end'} padding={1} sx={{ borderTop: '1px solid #e5e3e3' }}>
            <Button sx={{ fontSize: '13px', fontFamily: 'Inter', fontWeight: '600', color: '#111927' }}>Overview
                <Image src={arrowSideImg} alt='arrow side' />
            </Button>
        </Stack>
    )
}

export default OverviewButtonArea