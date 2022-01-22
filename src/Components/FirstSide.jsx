import React, { useContext } from 'react';
import { ValueContext } from '../Config/Context';
import {Grid} from '@mui/material';
import { makeStyles } from '@mui/styles'

function FirstSide() {
    let {data} = useContext(ValueContext);
    let arr = data.map(e => console.log(e.product_name))
    const filterStyle = makeStyles({
        root:{
            background:' #131313',
            width: '228px',
            height: '275px',
            color:' white',
            padding: '15px',
            margin: '10px',
            borderRadius: '15px'
        }
    })
    const classes = filterStyle()
  return (
       <Grid className={classes.root}>
           <div>
               <h3>Filters</h3>
               <hr />
           </div>

       </Grid>
  )
}

export default FirstSide;
