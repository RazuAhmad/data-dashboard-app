import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import overviewIcon from '@/public/assets/menuIcons/overview.svg'
import accountIcon from '@/public/assets/menuIcons/account.svg'
import companiesIcon from '@/public/assets/menuIcons/companies.svg'
import customersIcon from '@/public/assets/menuIcons/customersIcon.svg'
import errorIcon from '@/public/assets/menuIcons/error.svg'
import loginIcon from '@/public/assets/menuIcons/login.svg'
import registerIcon from '@/public/assets/menuIcons/registerIcon.svg'
import settingIcon from '@/public/assets/menuIcons/setting.svg'

const SidebarMenuArea = () => {
    return (
        <Box sx={{ paddingX: '16px', paddingY: "24px", borderBottom: '1px solid #525050;' }}>
            <Stack flexDirection="row" gap='16px' alignItems='center' paddingY="6px" paddingX="16px" sx={{
                ":hover": {
                    backgroundColor: '#FFFFFF0A'
                },
                cursor: 'pointer'
            }}>
                <Image src={overviewIcon} alt='overview' />
                <Box component='span' sx={{ color: '#9DA4AE', fontFamily: 'inter', fontWeight: '600', fontSize: '14px' }}>Overview</Box>
            </Stack>

            <Stack flexDirection="row" gap='16px' alignItems='center' paddingY="6px" paddingX="16px" sx={{
                ":hover": {
                    backgroundColor: '#FFFFFF0A'
                },
                cursor: 'pointer'
            }}>
                <Image src={customersIcon} alt='overview' />
                <Box component='span' sx={{ color: '#9DA4AE', fontFamily: 'inter', fontWeight: '600', fontSize: '14px' }}>Customers</Box>
            </Stack>

            <Stack flexDirection="row" gap='16px' alignItems='center' paddingY="6px" paddingX="16px" sx={{
                ":hover": {
                    backgroundColor: '#FFFFFF0A'
                },
                cursor: 'pointer'
            }}>
                <Image src={companiesIcon} alt='overview' />
                <Box component='span' sx={{ color: '#9DA4AE', fontFamily: 'inter', fontWeight: '600', fontSize: '14px' }}>Companies</Box>
            </Stack>

            <Stack flexDirection="row" gap='16px' alignItems='center' paddingY="6px" paddingX="16px" sx={{
                ":hover": {
                    backgroundColor: '#FFFFFF0A'
                },
                cursor: 'pointer'
            }}>
                <Image src={accountIcon} alt='overview' />
                <Box component='span' sx={{ color: '#9DA4AE', fontFamily: 'inter', fontWeight: '600', fontSize: '14px' }}>Account</Box>
            </Stack>

            <Stack flexDirection="row" gap='16px' alignItems='center' paddingY="6px" paddingX="16px" sx={{
                ":hover": {
                    backgroundColor: '#FFFFFF0A'
                },
                cursor: 'pointer'
            }}>
                <Image src={settingIcon} alt='overview' />
                <Box component='span' sx={{ color: '#9DA4AE', fontFamily: 'inter', fontWeight: '600', fontSize: '14px' }}>Setting</Box>
            </Stack>

            <Stack flexDirection="row" gap='16px' alignItems='center' paddingY="6px" paddingX="16px" sx={{
                ":hover": {
                    backgroundColor: '#FFFFFF0A'
                },
                cursor: 'pointer'
            }}>
                <Image src={loginIcon} alt='overview' />
                <Box component='span' sx={{ color: '#9DA4AE', fontFamily: 'inter', fontWeight: '600', fontSize: '14px' }}>Login</Box>
            </Stack>

            <Stack flexDirection="row" gap='16px' alignItems='center' paddingY="6px" paddingX="16px" sx={{
                ":hover": {
                    backgroundColor: '#FFFFFF0A'
                },
                cursor: 'pointer'
            }}>
                <Image src={registerIcon} alt='overview' />
                <Box component='span' sx={{ color: '#9DA4AE', fontFamily: 'inter', fontWeight: '600', fontSize: '14px' }}>Register</Box>
            </Stack>

            <Stack flexDirection="row" gap='16px' alignItems='center' paddingY="6px" paddingX="16px" sx={{
                ":hover": {
                    backgroundColor: '#FFFFFF0A'
                },
                cursor: 'pointer'
            }}>
                <Image src={errorIcon} alt='overview' />
                <Box component='span' sx={{ color: '#9DA4AE', fontFamily: 'inter', fontWeight: '600', fontSize: '14px' }}>Error</Box>
            </Stack>

        </Box>
    )
}

export default SidebarMenuArea