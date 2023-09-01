import React from 'react'
import styled from '@emotion/styled'
import { AppBar, Avatar, Box, Button, IconButton, TextField, Typography } from '@mui/material'
import { color } from '../theme'
import AdbIcon from '@mui/icons-material/Adb';
import AppleIcon from '@mui/icons-material/Apple';
import SearchIcon from '@mui/icons-material/Search';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import pizzaexp from '../images/logo/pizzaexp.png'

const SubHeader = styled.div`
    background-color: ${color.primary[90]};
 `
const MainHeader = styled.div`
    background-color: ${color.tertiary[100]};
`
const SortWrapper = styled.div`
    padding: 8px 12px;
    gap: 10%;
    padding: 0 80px;
    position: relative;
`
const SearchWrapper = styled.div`
    position: absolute;
    right: 0px;
    width: 40px;
`

export const Header = () => {
    return (
        <Box sx={{ width: "100%"}}>
            <AppBar position='static'>
                <SubHeader>
                    <Box className='container' sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        <Box className='flex-item d-flex text-left'>
                            <Typography variant='h4' sx={{ textTransform: 'uppercase' }}>Download our app</Typography>
                            <IconButton disableRipple sx={{ p: 0, pl: 1 }}>
                                <AdbIcon />
                            </IconButton>
                            <IconButton disableRipple sx={{ p: 0, pl: 1 }}>
                                <AppleIcon />
                            </IconButton>
                        </Box>
                        <Box className='flex-item text-right'>
                            <Button color='primary' sx={{ p: 0, textTransform: 'uppercase' }}>
                                Login
                            </Button>
                        </Box>
                    </Box>
                </SubHeader>
                <MainHeader>
                    <Box className='container d-flex' sx={{ p: 1.5 }}>
                        <Box className='flex-item d-flex text-left'>
                            <Avatar variant='rounded' sx={{ backgroundColor: color.primary, mr: 1.5, p:1 }}>
                                <IconButton disableRipple>
                                    <DragHandleIcon />
                                </IconButton>
                            </Avatar>
                            <Box sx={{ mr: 3, pb: 0 }}>
                                <img alt='pizza-express-logo'
                                    width='120px'
                                    height='80px'
                                    style={{ cursor: 'pointer' }}
                                    src={pizzaexp} />
                            </Box>
                            <Box className='d-flex' sx={{ cursor: 'pointer', gap: '12px' }}>
                                <Box className='d-flex'>
                                    <MyLocationIcon sx={{ color: color.textcolor.primary }} />
                                </Box>
                                <Box>
                                    <Typography variant='h3' noWrap>Select Delivery Location</Typography>
                                    <Typography variant='h3' noWrap sx={{ display: 'none' }}>Select Pickup Store</Typography>
                                </Box>
                                <Box className='d-flex'>
                                    <UnfoldMoreOutlinedIcon sx={{ color: color.textcolor.primary }} />
                                </Box>
                            </Box>
                        </Box>
                        <Box className='flex-item d-flex text-right' sx={{ gap: '5%' }}>
                            <SortWrapper className='d-flex'>
                                <Box className='d-flex' sx={{padding: 1.5}}>
                                    <Typography variant='h3' noWrap>Sort by</Typography>
                                    <UnfoldMoreOutlinedIcon sx={{ color: color.textcolor.primary }} />
                                </Box>
                                <SearchWrapper>
                                    {/* <TextField variant='outlined' /> */}
                                    <Avatar variant='rounded'>
                                        <SearchIcon sx={{ color: color.textcolor.primary }} />
                                    </Avatar>
                                </SearchWrapper>
                            </SortWrapper>
                            <Box>
                                <Avatar variant='rounded'>
                                    <ShoppingCartIcon sx={{ color: color.textcolor.primary }} />
                                </Avatar>
                            </Box>
                        </Box>
                    </Box>
                </MainHeader>
            </AppBar>
        </Box>
    )
}
