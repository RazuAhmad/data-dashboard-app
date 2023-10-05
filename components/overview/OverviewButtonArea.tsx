import { Button, Stack } from '@mui/material'
import Image from 'next/image'
import arrowSideImg from '@/public/assets/overview-icons/arrow-side.svg'

const OverviewButtonArea = () => {
    return (
        <Stack flexDirection={'row'} justifyContent={'flex-end'} padding={1} sx={{ borderTop: '1px solid gray' }}>
            <Button sx={{ fontSize: '13px', fontFamily: 'Inter' }}>Overview
                <Image src={arrowSideImg} alt='arrow side' />
            </Button>
        </Stack>
    )
}

export default OverviewButtonArea