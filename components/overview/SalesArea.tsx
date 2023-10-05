import { Paper } from '@mui/material'
import React from 'react'
import SalesAreaHeader from './SalesAreaHeader'
import SalesChart from './SalesChart'
import OverviewButtonArea from './OverviewButtonArea'

const SalesArea = () => {
    return (
        <Paper sx={{ paddingTop: '32px' }}>
            <SalesAreaHeader />
            <SalesChart />
            <OverviewButtonArea />
        </Paper>
    )
}

export default SalesArea