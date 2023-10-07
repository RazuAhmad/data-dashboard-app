'use client'
import { Box, Paper, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Image from 'next/image'
import dollarWhiteIcon from '@/public/assets/overview-icons/dollar-icon.svg'
import arrowUpIcon from '@/public/assets/overview-icons/arrow-up-icon.svg'
import arrowDownIcon from '@/public/assets/overview-icons/arrow-down.svg'
import customerIcon from '@/public/assets/overview-icons/customer-icon.svg'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));


const OverviewHeader = () => {
    return (
        <Stack flexDirection={'row'} justifyContent={'space-between'} gap={4} marginBottom={2}>
            <Paper sx={{ paddingX: '24px', paddingY: '32px', flex: '1' }}>
                <Stack flexDirection='row' justifyContent={'space-between'} marginBottom={2}>
                    <Box>
                        <Typography variant='body1' fontSize={12} color="#6C737F" fontWeight={600} fontFamily="Inter" marginBottom={1}>BUDGET</Typography>
                        <Typography variant='h4' fontSize={32} color="#111927" fontWeight={700} fontFamily="Plus Jakarta Sans">$24k</Typography>
                    </Box>

                    <Box sx={{ backgroundColor: 'rgb(240, 68, 56)', borderRadius: '50%', width: '56px', height: '56px', display: 'flex', alignItems: "center", justifyContent: 'center' }}>
                        <Image src={dollarWhiteIcon} alt='dollaricon' />
                    </Box>
                </Stack>

                <Stack flexDirection={'row'} gap='1rem' alignItems='center'>
                    <Stack flexDirection={'row'} gap='2px' alignItems={'center'}>
                        <Image src={arrowUpIcon} alt='arrow-up' />
                        <Typography variant='body2' color='#10b981' fontFamily='Inter' fontSize='14px' fontWeight={400}>12%</Typography>
                    </Stack>
                    <Typography color='#6c737f' fontWeight='500' fontSize={12} fontFamily='Inter'>Since last month</Typography>
                </Stack>
            </Paper>

            <Paper sx={{ paddingX: '24px', paddingY: '32px', flex: '1' }}>
                <Stack flexDirection='row' justifyContent={'space-between'} marginBottom={2}>
                    <Box>
                        <Typography variant='body1' fontSize={12} color="#6C737F" fontWeight={600} fontFamily="Inter" marginBottom={1}>TOTAL CUSTOMERS</Typography>
                        <Typography variant='h4' fontSize={32} color="#111927" fontWeight={700} fontFamily="Plus Jakarta Sans">1.6k</Typography>
                    </Box>

                    <Box sx={{ backgroundColor: '#10B981', borderRadius: '50%', width: '56px', height: '56px', display: 'flex', alignItems: "center", justifyContent: 'center' }}>
                        <Image src={customerIcon} alt='dollaricon' />
                    </Box>
                </Stack>

                <Stack flexDirection={'row'} gap='1rem' alignItems='center'>
                    <Stack flexDirection={'row'} gap='2px' alignItems={'center'}>
                        <Image src={arrowDownIcon} alt='arrow-up' />
                        <Typography variant='body2' color='rgb(240, 68, 56)' fontFamily='Inter' fontSize='14px' fontWeight={400}>16%</Typography>
                    </Stack>
                    <Typography color='#6c737f' fontWeight='500' fontSize={12} fontFamily='Inter'>Since last month</Typography>
                </Stack>
            </Paper>

            <Paper sx={{ paddingX: '24px', paddingY: '32px', flex: '1' }}>
                <Stack flexDirection='row' justifyContent={'space-between'} sx={{ marginBottom: '30px' }}>
                    <Box>
                        <Typography variant='body1' fontSize={12} color="#6C737F" fontWeight={600} fontFamily="Inter" marginBottom={1}>TASK PROGRESS</Typography>
                        <Typography variant='h4' fontSize={32} color="#111927" fontWeight={700} fontFamily="Plus Jakarta Sans">75.5%</Typography>
                    </Box>

                    <Box sx={{ backgroundColor: '#F79009', borderRadius: '50%', width: '56px', height: '56px', display: 'flex', alignItems: "center", justifyContent: 'center' }}>
                        <Image src={dollarWhiteIcon} alt='dollaricon' />
                    </Box>
                </Stack>

                <Box >
                    <BorderLinearProgress variant="determinate" value={75.5} sx={{ height: '4px', backgroundColor: 'rgb(99, 102, 241)' }} />
                </Box>
            </Paper>

            <Paper sx={{ paddingX: '24px', paddingY: '32px', flex: '1' }}>
                <Stack flexDirection='row' justifyContent={'space-between'} marginBottom={2}>
                    <Box>
                        <Typography variant='body1' fontSize={12} color="#6C737F" fontWeight={600} fontFamily="Inter" marginBottom={1}>BUDGET</Typography>
                        <Typography variant='h4' fontSize={32} color="#111927" fontWeight={700} fontFamily="Plus Jakarta Sans">$24k</Typography>
                    </Box>

                    <Box sx={{ backgroundColor: '#6366F1', borderRadius: '50%', width: '56px', height: '56px', display: 'flex', alignItems: "center", justifyContent: 'center' }}>
                        <Image src={dollarWhiteIcon} alt='dollaricon' />
                    </Box>
                </Stack>

                <Stack flexDirection={'row'} gap='1rem' alignItems='center'>
                    <Stack flexDirection={'row'} gap='2px' alignItems={'center'}>
                        <Image src={arrowUpIcon} alt='arrow-up' />
                        <Typography variant='body2' color='#10b981' fontFamily='Inter' fontSize='14px' fontWeight={400}>12%</Typography>
                    </Stack>
                    <Typography color='#6c737f' fontWeight='500' fontSize={12} fontFamily='Inter'>Since last month</Typography>
                </Stack>
            </Paper>
        </Stack >
    )
}

export default OverviewHeader