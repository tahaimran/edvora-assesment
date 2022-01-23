import React, { useContext, useState } from 'react';
import { ValueContext } from '../Config/Context';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles'
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material'
function FirstSide() {
     let {age, setAge} = useContext(ValueContext)
    let { data } = useContext(ValueContext);

    const filterStyle = makeStyles({
        root: {
            background: ' #131313',
            width: '200px',
            height: '275px',
            color: ' white',
            padding: '15px',
            margin: '80px 10px 10px 10px',
            borderRadius: '15px',
        }, select: {
            backgroundColor: '#232323',
            color: 'white'
        }
    })
    const handleChange = (e) => {
        setAge(e.target.value)
    }
    const classes = filterStyle()
    return (
        <Grid className={classes.root}>
            <div>
                <h3>Filters</h3>
                <hr />
                <FormControl fullWidth>
                    <InputLabel sx={{color: 'white'}}>Products</InputLabel>
                    <Select className={classes.select}
                        value={age}
                        onChange={handleChange}
                    >
                        {data.map((e, i) => {
                            return (
                                <MenuItem key={i} value={i}>{e.product_name}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </div>

        </Grid>
    )
}

export default FirstSide;
