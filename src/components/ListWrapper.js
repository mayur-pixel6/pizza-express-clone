import { Box, Typography } from '@mui/material'
import React from 'react'
import { styled } from 'styled-components'
import { CategoryListData } from '../data/data'

const CategoryList = styled.ul`
    padding: 10px 30px 10px 0;
    width: 100%;
    display: flex;
    overflow: auto;
    list-style: none;
`
const CategoryListItem = styled.li`
    padding: 13px 16px;
    flex-grow: 1;
    text-transform: capitalize;
    cursor: pointer;
    display: flex;
    align-items: center;
    white-space: nowrap;
    justify-content: center;
`
export const ListWrapper = () => {
    return (
        <Box className='container'>
            <CategoryList>
                {
                    CategoryListData.map((obj) => {
                        return(
                        <CategoryListItem>
                            <Typography variant='h3'>{obj.name}</Typography>
                            <Typography variant='h3'>&nbsp;({obj.item_count})</Typography>
                        </CategoryListItem>
                        )
                    })
                }
            </CategoryList>
        </Box>
    )
}
