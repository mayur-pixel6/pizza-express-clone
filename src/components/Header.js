import React, { useState } from 'react'
import styled from '@emotion/styled'
import { AppBar, Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Drawer, FormControlLabel, IconButton, List, ListItemText, ListItem, ListItemIcon, Radio, TextField, Typography, FormControl, InputAdornment, Input } from '@mui/material'
import { color } from '../theme'
import AdbIcon from '@mui/icons-material/Adb';
import AppleIcon from '@mui/icons-material/Apple';
import SearchIcon from '@mui/icons-material/Search';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import CloseIcon from '@mui/icons-material/Close';
import pizzaexp from '../images/logo/pizzaexp.png';

const SubHeader = styled.div`
    background-color: ${color.primary[90]};
 `
const MainHeader = styled.div`
    background-color: ${color.tertiary[100]};
`

const ButtonIcon = styled(IconButton)({
    backgroundColor: color.extra.white,
    borderRadius: '8px',
})

const LoginAlertSection = styled(Box)({
    backgroundColor: color.primary[80],
    padding: '12px 0',
    display: 'flex',
    borderRadius: "8px",
    justifyContent: 'space-evenly',
    textAlign: 'left',
    width: '100%',
    border: '1px solid rgba(163,163,164,.16)',
    boxSizing: 'border-box',
})

const MenuList = styled(Box)({

})

const InputItem = styled(Input)({
    borderRadius: '6px',
    paddingLeft: '10px',
    backgroundColor: color.extra.white,
    height: '40px',
    cursor: 'pointer',
})

const SortWrapper = styled.div`
    padding: 8px 12px;
    gap: 10%;
    padding: 0 80px;
    position: relative;
`
const SearchWrapper = styled.div`
    position: absolute;
    right: 40px;
    width: 40px;
`

export const Header = () => {

    const [open, setOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <Box sx={{ width: "100%" }}>
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
                            <ButtonIcon sx={{mr: 1}} disableRipple size='large' variant='contained' onClick={() => setDrawerOpen(true)}>
                                <DragHandleIcon />
                            </ButtonIcon>
                            <Drawer anchor='left' open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                                <Box width='320px' textAlign='center' p={2}>
                                    <LoginAlertSection>
                                        <Avatar sx={{ backgroundColor: color.extra.white, width: '48px', height: '48px' }} >
                                            <PersonIcon sx={{ color: color.primary.dark[60], fontSize: '36px' }} />
                                        </Avatar>
                                        <Box>
                                            <Typography variant='h2'>User account</Typography>
                                            <Typography variant='h3' py={1.5}>Login for personalised details and smoother ordering experience</Typography>
                                            <Button color='primary' variant='contained'>Login</Button>
                                        </Box>
                                    </LoginAlertSection>
                                    <MenuList>
                                        <List>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <ContactSupportIcon />
                                                </ListItemIcon>
                                            <ListItemText>
                                                <Typography>Terms and Conditions</Typography>
                                            </ListItemText>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <ContactSupportIcon />
                                                </ListItemIcon>
                                            <ListItemText>
                                                <Typography>Frequently Asked Questions</Typography>
                                            </ListItemText>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <ContactSupportIcon />
                                                </ListItemIcon>
                                            <ListItemText>
                                                <Typography>About Us</Typography>
                                            </ListItemText>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <ContactSupportIcon />
                                                </ListItemIcon>
                                            <ListItemText>
                                                <Typography>Privacy Policy</Typography>
                                            </ListItemText>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <ContactSupportIcon />
                                                </ListItemIcon>
                                            <ListItemText>
                                                <Typography>Safety</Typography>
                                            </ListItemText>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <ContactSupportIcon />
                                                </ListItemIcon>
                                            <ListItemText>
                                                <Typography>Menu - Nutritional & Allergen Info</Typography>
                                            </ListItemText>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <ContactSupportIcon />
                                                </ListItemIcon>
                                            <ListItemText>
                                                <Typography>Book A Table</Typography>
                                            </ListItemText>
                                            </ListItem>
                                        </List>
                                    </MenuList>
                                </Box>
                            </Drawer>
                            <Box sx={{ mr: 3, pb: 0 }} className='d-flex'>
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
                                <Button variant='text' disableRipple sx={{ padding: 1.5 }} onClick={() => setOpen(true)}>
                                    <Typography variant='h3' noWrap>Sort by</Typography>
                                    <UnfoldMoreOutlinedIcon sx={{ color: color.textcolor.primary }} />
                                </Button>
                                <Dialog open={open}
                                    onClose={() => setOpen(false)}>
                                    <DialogTitle>
                                        Sort by
                                    </DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            <FormControlLabel value="Low To High" control={<Radio />} label="Price (Low To  High)" />
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>

                                        <Button variant='outlined'>Clear All</Button>
                                        <Button variant='contained'>Apply</Button>
                                    </DialogActions>
                                </Dialog>
                                <SearchWrapper>
                                    {/* <TextField variant='outlined' /> */}
                                    {/* <ButtonIcon variant='rounded'>
                                        <SearchIcon sx={{ color: color.textcolor.primary }} />
                                    </ButtonIcon> */}
                                    <FormControl>
                                        <InputItem
                                            startAdornment={
                                                <InputAdornment position='start'>
                                                    <SearchIcon></SearchIcon>
                                                </InputAdornment>
                                        }
                                            endAdornment={
                                                <InputAdornment position='end'>
                                                    <CloseIcon />
                                                </InputAdornment>
                                            }
                                        >
                                        </InputItem>
                                    </FormControl>
                                </SearchWrapper>
                            </SortWrapper>
                            <Box>
                                <ButtonIcon variant='rounded'>
                                    <ShoppingCartIcon sx={{ color: color.textcolor.primary }} />
                                </ButtonIcon>
                            </Box>
                        </Box>
                    </Box>
                </MainHeader>
            </AppBar>
        </Box>
    )
}
