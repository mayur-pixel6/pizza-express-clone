import React from 'react'
import styled from '@emotion/styled'
import {color} from '../theme'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterContainer = styled.div`
    padding: 64px 24px 40px;
    flex-direction: row;
    justify-content: flex-start;
    display: flex;
    align-items: flex-start;
    grid-gap: 10%;
    gap: 10%;
`

const Ul = styled.ul`
    margin: 16px 0px;
    list-style: none;
    padding: 0;
`
const Li = styled.li`
    margin-bottom: 8px
`

const ButtonIcon = styled(IconButton)({
    '&:hover': {
        backgroundColor: color.primary[100],
    }
})



export const Footer = () => {
    return (
        <Box className='container'>
            <FooterContainer className='text-left'>
                <Box sx={{ width: '35%' }}>
                    <Typography variant='h4' sx={{ textTransform: 'uppercase' }}>More</Typography>
                    <Ul>
                        <Li>
                            <a>
                                <Typography variant='h3'>
                                    Store Locator
                                </Typography>
                            </a>
                        </Li>
                        <Li>
                            <a>
                                <Typography variant='h3'>
                                    Terms and Conditions
                                </Typography>
                            </a>
                        </Li>
                        <Li>
                            <a>
                                <Typography variant='h3'>
                                    Frequently Asked Questions
                                </Typography>
                            </a>
                        </Li>
                        <Li>
                            <a>
                                <Typography variant='h3'>
                                    About Us
                                </Typography>
                            </a>
                        </Li>
                        <Li>
                            <a>
                                <Typography variant='h3'>
                                    Privacy Policy
                                </Typography>
                            </a>
                        </Li>
                        <Li>
                            <a>
                                <Typography variant='h3'>
                                    Safety
                                </Typography>
                            </a>
                        </Li>
                        <Li>
                            <a>
                                <Typography variant='h3'>
                                    Menu - Nutritional & Allergen Info
                                </Typography>
                            </a>
                        </Li>
                        <Li>
                            <a>
                                <Typography variant='h3'>
                                    Book A Table
                                </Typography>
                            </a>
                        </Li>
                    </Ul>
                </Box>
                <Box sx={{ width: '35%' }}>
                    <Typography variant='h4' sx={{ textTransform: 'uppercase' }}>Follow us</Typography>
                    <Stack direction="row">
                        <ButtonIcon>
                            <FacebookIcon size='large' color=''></FacebookIcon>
                        </ButtonIcon>
                        <ButtonIcon variant='rounded'>
                            <InstagramIcon size='large' color=''></InstagramIcon>
                        </ButtonIcon>
                    </Stack>
                </Box>
            </FooterContainer>
        </Box >
    )
}
