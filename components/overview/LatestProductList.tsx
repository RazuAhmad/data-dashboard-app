import React from 'react'
import { Button, IconButton, Paper, Stack, Typography } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import listProduct1 from '@/public/assets/overview-icons/list-product-1.png'
import listProduct2 from '@/public/assets/overview-icons/list-product-2.png'
import listProduct3 from '@/public/assets/overview-icons/list-product-3.png'
import listProduct4 from '@/public/assets/overview-icons/list-product-4.png'
import listProduct5 from '@/public/assets/overview-icons/list-product-5.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const LatestProductList = () => {
    return (
        <Paper sx={{ flex: 1, }} >
            <Typography variant='h6' fontFamily='Plus Jakarta Sans' fontSize='18px' fontWeight='700' color='#111927' sx={{ padding: '32px 24px 16px' }}>Latest Products</Typography>
            <List>
                <ListItem

                    sx={{ borderBottom: '1px solid rgb(242, 244, 247);', padding: '8px 16px' }}
                    secondaryAction={
                        <IconButton>
                            <MoreVertIcon sx={{ fontSize: '1.5rem' }} />
                        </IconButton>
                    }
                >
                    <ListItemAvatar>
                        <Avatar sx={{ borderRadius: '8px' }}>
                            <Image src={listProduct1} alt='' />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primaryTypographyProps={{ fontSize: '16px', fontFamily: 'Inter', fontWeight: '500', color: '#111927' }}

                        secondaryTypographyProps={{ fontSize: '14px', fontFamily: 'Inter', fontWeight: '400', color: '#6c737f' }} primary="Healthcare Erbology"
                        secondary="Updated about 6 hours ago"
                    ></ListItemText>

                </ListItem>

                <ListItem

                    sx={{ borderBottom: '1px solid rgb(242, 244, 247);', padding: '8px 16px' }}
                    secondaryAction={
                        <IconButton>
                            <MoreVertIcon sx={{ fontSize: '1.5rem' }} />
                        </IconButton>
                    }
                >
                    <ListItemAvatar>
                        <Avatar sx={{ borderRadius: '8px' }}>
                            <Image src={listProduct2} alt='' />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primaryTypographyProps={{ fontSize: '16px', fontFamily: 'Inter', fontWeight: '500', color: '#111927' }}

                        secondaryTypographyProps={{ fontSize: '14px', fontFamily: 'Inter', fontWeight: '400', color: '#6c737f' }} primary="
                    Makeup Lancome Rouge"
                        secondary="Updated 2 days ago"
                    ></ListItemText>

                </ListItem>

                <ListItem

                    sx={{ borderBottom: '1px solid rgb(242, 244, 247);', padding: '8px 16px' }}
                    secondaryAction={
                        <IconButton>
                            <MoreVertIcon sx={{ fontSize: '1.5rem' }} />
                        </IconButton>
                    }
                >
                    <ListItemAvatar>
                        <Avatar sx={{ borderRadius: '8px' }}>
                            <Image src={listProduct3} alt='' />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primaryTypographyProps={{ fontSize: '16px', fontFamily: 'Inter', fontWeight: '500', color: '#111927' }}

                        secondaryTypographyProps={{ fontSize: '14px', fontFamily: 'Inter', fontWeight: '400', color: '#6c737f' }} primary="Skincare Soja CO"
                        secondary="Updated 1 day ago"
                    ></ListItemText>

                </ListItem>

                <ListItem

                    sx={{ borderBottom: '1px solid rgb(242, 244, 247);', padding: '8px 16px' }}
                    secondaryAction={
                        <IconButton>
                            <MoreVertIcon sx={{ fontSize: '1.5rem' }} />
                        </IconButton>
                    }
                >
                    <ListItemAvatar>
                        <Avatar sx={{ borderRadius: '8px' }}>
                            <Image src={listProduct4} alt='' />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primaryTypographyProps={{ fontSize: '16px', fontFamily: 'Inter', fontWeight: '500', color: '#111927' }}

                        secondaryTypographyProps={{ fontSize: '14px', fontFamily: 'Inter', fontWeight: '400', color: '#6c737f' }} primary="
                    Makeup Lipstick"
                        secondary="Updated 3 days ago"
                    ></ListItemText>

                </ListItem>

                <ListItem

                    sx={{ borderBottom: '1px solid rgb(242, 244, 247);', padding: '8px 16px' }}
                    secondaryAction={
                        <IconButton>
                            <MoreVertIcon sx={{ fontSize: '1.5rem' }} />
                        </IconButton>
                    }
                >
                    <ListItemAvatar>
                        <Avatar sx={{ borderRadius: '8px' }}>
                            <Image src={listProduct5} alt='' />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primaryTypographyProps={{ fontSize: '16px', fontFamily: 'Inter', fontWeight: '500', color: '#111927' }}

                        secondaryTypographyProps={{ fontSize: '14px', fontFamily: 'Inter', fontWeight: '400', color: '#6c737f' }} primary="
                    Healthcare Ritual"
                        secondary="Updated 6 days ago"
                    ></ListItemText>

                </ListItem>

                <ListItem sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button sx={{ color: '#111927', }}>
                        <Typography component='span' sx={{ fontSize: '13px', fontFamily: 'Inter', fontWeight: '600' }}>View all</Typography>
                        <ArrowForwardIcon sx={{ fontSize: '18px' }} />
                    </Button>
                </ListItem>

            </List>


        </Paper>
    )
}

export default LatestProductList