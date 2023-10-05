import { Stack, Typography } from '@mui/material'
import desktopIcon from '@/public/assets/overview-icons/desktop-icon.svg'
import tabletIcon from '@/public/assets/overview-icons/table-icon.svg'
import cellPhoneIcon from '@/public/assets/overview-icons/cell-phone-icon.svg'
import Image from 'next/image'

const DeviceStatistics = () => {
  return (
    <Stack flexDirection='row' gap='1rem' justifyContent='center'>
      <Stack alignItems='center'>
        <Image src={desktopIcon} alt='' width={24} height={24} />
        <Typography variant='body1' fontFamily='Plus Jakarta Sans' fontSize={18} fontWeight={700}>Desktop</Typography>
        <Typography variant='subtitle1' fontFamily='Inter' fontSize={14} fontWeight={500}>63%</Typography>
      </Stack>

      <Stack alignItems='center'>
        <Image src={tabletIcon} alt='' width={24} height={24} />
        <Typography variant='body1' fontFamily='Plus Jakarta Sans' fontSize={18} fontWeight={700}>Tablet</Typography>
        <Typography variant='subtitle1' fontFamily='Inter' fontSize={14} fontWeight={500}>15%</Typography>
      </Stack>

      <Stack alignItems='center'>
        <Image src={cellPhoneIcon} alt='' width={24} height={24} />
        <Typography variant='body1' fontFamily='Plus Jakarta Sans' fontSize={18} fontWeight={700}>Phone</Typography>
        <Typography variant='subtitle1' fontFamily='Inter' fontSize={14} fontWeight={500}>22%</Typography>
      </Stack>

    </Stack>
  )
}

export default DeviceStatistics