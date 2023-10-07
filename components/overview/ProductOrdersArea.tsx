'use client'

import React from 'react'
import { IconButton, Paper, Stack, Typography } from '@mui/material'

import LatestProductList from './LatestProductList';
import LatestOrdersTable from './LatestOrdersTable';



const ProductOrdersArea = () => {

    return (
        <Stack flexDirection='row' gap={3}>
            <LatestProductList />
            <LatestOrdersTable />
        </Stack>
    )
}

export default ProductOrdersArea