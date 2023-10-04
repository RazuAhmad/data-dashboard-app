import { Box, Button } from '@mui/material'
import Image from 'next/image'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import userProfileAvatar from '@/public/assets/avatars/avatar-anika-visser.png'
import profileLogo from '@/public/assets/logos/profile-logo.svg'

const UserProfileArea = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <Button sx={{ borderRadius: '100%', display: 'flex', alignItems: 'center' }}>
                <Image src={profileLogo} alt='profile logo' />
            </Button>

            <Button sx={{ borderRadius: '100%', display: 'flex', alignItems: 'center' }}>
                <NotificationsOutlinedIcon sx={{ fontSize: '1.5rem', color: 'gray' }} />
            </Button>
            <Button sx={{ borderRadius: '100%', display: 'flex', alignItems: 'center' }}>
                <Image src={userProfileAvatar} width={40} height={40} alt='' className='rounded-full' />
            </Button>

        </Box>
    )
}

export default UserProfileArea