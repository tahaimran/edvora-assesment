import React, { useContext, useState } from 'react';
import { ValueContext } from '../Config/Context';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles'
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material'
function FirstSide() {
     let {age, setAge} = useContext(ValueContext)
     let {state, setState} = useContext(ValueContext)
    let { data } = useContext(ValueContext);
    let {show, setShow} = useContext(ValueContext)
    let {showState, setShowState} = useContext(ValueContext)
    let {city, setCity} = useContext(ValueContext)

    const filterStyle = makeStyles({
        root: {
            background: ' #131313',
            width: '200px',
            height: 'auto',
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
    const states = (e) => {
        setState(e.target.value)
    }
    const cities = (e) => {
        setCity(e.target.value)
    }
    const classes = filterStyle()
    return (
        <Grid className={classes.root}>
            <div>
                <h3>Filters</h3>
                <hr />
                <FormControl fullWidth>
                    <InputLabel sx={{color: 'white'}}>Products</InputLabel>
                    <Select   className={classes.select}
                        value={age}
                        onChange={handleChange}
                    >
                        {data.map((e, i) => {
                            return (
                                <MenuItem onClick={() => setShow(false)}   key={i} value={e.product_name}>{e.product_name}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>

                <FormControl fullWidth sx={{marginTop:'10px'}}>
                    <InputLabel sx={{color: 'white'}}>State</InputLabel>
                    <Select className={classes.select}
                        value={state}
                        onChange={states}
                    >
                        { data.map((e, i) => {
                            return (
                                <MenuItem  key={i} value={e.address.state}>{e.address.state}</MenuItem>
                            )
                        })
                    }
                    </Select>
                </FormControl>

                <FormControl fullWidth sx={{marginTop:'10px'}}>
                    <InputLabel sx={{color: 'white'}}>City</InputLabel>
                    <Select className={classes.select}
                        value={city}
                        onChange={cities}
                    >
                        { data.map((e, i) => {
                            return (
                                <MenuItem   key={i} value={e.address.city}>{e.address.city}</MenuItem>
                            )
                        })
                    }
                    </Select>
                </FormControl>

            </div>

        </Grid>
    )
}

export default FirstSide;
