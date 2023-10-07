'use client'

import { Box, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import SalesArea from './SalesArea'
import Image from 'next/image'
import pieChart from '@/public/assets/overview-icons/traffic-soruce-piechart.svg'
import TrafficPieChart from './TrafficPieChart'
import SalesChart from './SalesChart'
import DeviceStatistics from './DeviceStatistics'

const AllChartsArea = () => {
    return (
        <Box sx={{ paddingY: '12px', marginBottom: '12px' }}>

            <Stack flexDirection='row' columnGap='35px'>
                <SalesArea />

                <Paper className="">
                    <Typography variant='body1' fontFamily='Plus Jakarta Sans' fontSize={18} fontWeight={700} padding="32px 24px 16px">Traffic Source</Typography>
                    <TrafficPieChart />
                    <DeviceStatistics />
                </Paper>


            </Stack>
        </Box>
    )
}

export default AllChartsArea