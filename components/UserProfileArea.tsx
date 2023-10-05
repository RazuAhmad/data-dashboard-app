import { Box, Button } from '@mui/material'
import Image from 'next/image'
import userProfileAvatar from '@/public/assets/avatars/avatar-anika-visser.png'
import profileLogo from '@/public/assets/logos/profile-logo.svg'
import notificationIcon from '@/public/assets/notification-icon.svg'
const UserProfileArea = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Button sx={{ borderRadius: '100%', display: 'flex', alignItems: 'center' }}>
                <Image src={profileLogo} alt='profile logo' />
            </Button>

            <Button sx={{ borderRadius: '100%', display: 'flex', alignItems: 'center' }}>
                <Image src={notificationIcon} alt='' />
            </Button>
            <Button sx={{ borderRadius: '100%', display: 'flex', alignItems: 'center' }}>
                <Image src={userProfileAvatar} width={40} height={40} alt='' className='rounded-full' />
            </Button>

        </Box>
    )
}

export default UserProfileArea