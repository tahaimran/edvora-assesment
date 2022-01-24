import React from 'react';
import Header from './Header';
import Products from './Products'
import { Grid } from '@mui/material'
function SecondSide() {
  return (
    <Grid  sx={{marginLeft:'15px'}} >
      <Header />
      <Products />
      <Products />

    </Grid>
  )
}

export default SecondSide;
