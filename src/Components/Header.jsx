import React from 'react';
import {makeStyles} from '@mui/styles'
function Header() {
  const header = makeStyles({
    mainH:{
        color : 'white'
    },
    secondH:{
      color: '#FFFFFF80'
    }
  })
  const classes = header()
  return (
    <>
      <h1 className={classes.mainH}>Edvora</h1>
      <h2 className= {classes.secondH}>Products</h2>
    </>
  )
}

export default Header