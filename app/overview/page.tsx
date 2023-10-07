import AllChartsArea from '@/components/overview/AllChartsArea'
import OverviewHeader from '@/components/overview/OverviewHeader'
import ProductOrdersSection from '@/components/overview/ProductOrdersArea'
import { Box } from '@mui/material'
import React from 'react'

const OverviewPage = () => {
    return (
        <Box sx={{ paddingTop: '64px', paddingX: "115.5px" }}>
            <OverviewHeader />
            <AllChartsArea />
            <ProductOrdersSection />
        </Box>
    )
}

export default OverviewPage