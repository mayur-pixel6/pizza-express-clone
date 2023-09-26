import { Box, Button, CardActions, SvgIcon, Typography } from '@mui/material'
import { color } from '../theme';
import React from 'react';
// import SvgIcon from '@mui/material/SvgIcon';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import nonVegIcon from '../images/non-veg.svg'
import vegIcon from '../images/veg.svg'
import styled from '@emotion/styled';

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, calc(25% - 24px));
    grid-gap: 24px;
`


export const MapData = (dataList) => {
    return (
        <Box className="container">
            <Box className='text-left d-flex' sx={{ pt: 2, pb: 1 }}>
                <Typography variant='h1' color={color.textcolor.tertiary}>{dataList.__typename}</Typography>
                {/* <Typography variant='h1' color={color.textcolor.grey}>({dataList.total_count?} Items)</Typography> */}
            </Box>
            <ListContainer>
                {dataList.items.map(obj => {
                    return (
                        <Box>
                            <Card sx={{ height: '100%' }}>
                                <CardMedia component="img" sx={{ height: '200px' }} image={obj.image_url} />
                                <CardContent sx={{ px: 0 }}>
                                    <Box className="text-left d-flex">
                                        <img src={obj.food_type == 1 ? vegIcon : nonVegIcon} />
                                        <Typography variant='h2' color={color.textcolor.tertiary} sx={{ ml: 1 }}>{obj.item_title}</Typography>
                                    </Box>
                                    <Box sx={{ height: '100px', overflow: 'hidden' }}>
                                        <Typography className='text-left'><p>{obj.item_desc}</p></Typography>
                                    </Box>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'space-between' }}>
                                    <Typography>
                                        {obj.item_price != 0 ? obj.item_price : ''}
                                    </Typography>
                                    <Button variant='outlined'>
                                        Add
                                    </Button>
                                </CardActions>
                            </Card>
                        </Box>
                    )
                })}
            </ListContainer>
        </Box>
    )
}