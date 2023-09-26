import { Box } from '@mui/material'
import React from 'react'
import { Beverages, CalabreseCalzones, Desserts, EightInchPizza, Pasta, RecommendedItems, Salad, SignatureDoughBalls, StartersItems } from './RecommendedItems'

export const ItemListWrapper = () => {
  return (
    <Box>
      <RecommendedItems />
      <StartersItems /> 
      <SignatureDoughBalls />
      <EightInchPizza />
      <Pasta />
      <CalabreseCalzones />
      <Salad />
      <Beverages />
      <Desserts />
    </Box>
  )
}
