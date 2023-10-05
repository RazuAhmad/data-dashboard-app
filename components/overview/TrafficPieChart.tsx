import * as React from 'react';
import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart';
import { Typography, Box } from '@mui/material';

const pieParams = { height: 283, width: 400, margin: { right: 5 } };

export default function TrafficPieChart() {
    return (
        <Box sx={{ paddingY: '32px', paddingX: '24px', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            <PieChart
                series={[{ data: [{ value: 10 }, { value: 15 }, { value: 20 }] }]}
                {...pieParams}
            />
        </Box>
    );
}