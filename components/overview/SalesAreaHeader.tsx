import { Button, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import syncIcon from '@/public/assets/overview-icons/sync-icon.svg'

const SalesAreaHeader = () => {
    return (
        <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ marginBottom: '16px', paddingX: '24px' }}>
            <Typography variant='body1' fontWeight={700} fontSize={18} color='#111927' fontFamily='Plus Jakarta Sans'>Sales</Typography>
            <Stack flexDirection='row' alignItems='center' gap='3px' component={Button}>
                <Image src={syncIcon} alt='sync icon' width={18} height={18} />
                <Typography variant='body2' fontFamily='Inter' fontSize={13} color='#111927'>Sync</Typography>
            </Stack>
        </Stack>
    )
}

export default SalesAreaHeader