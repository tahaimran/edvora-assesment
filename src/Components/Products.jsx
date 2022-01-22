import React, { useContext } from 'react';
import { ValueContext } from '../Config/Context';
import { Paper, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

function Products() {

    let { data } = useContext(ValueContext)
    // let arr = data.map(e => console.log(e.product_name))

    const productStyle = makeStyles({
        root: {
            background: '#131313',
            display: ' flex',
            overflow: 'scroll',
            margin:' 10px',
            borderRadius: '20px',
            padding: '8px'
        },
        head: {
            color : 'white'
        },
        product: {
            margin: ' 10px',
            padding: '8px',
            background: '#232323',
            color: 'white'

        },
        mainGrid: {
            width: '210px',

        },
        img: {
            width: '70px',
            borderRadius:' 10px'

        }
    })

    const classes = productStyle();


    return (
        <>
            <h3 className={classes.head}>Product</h3>
            <hr sx={{width :' 80%'}}/>
            <div className={`${classes.root} page`}>
                {data.map((e, i) => {
                    return (
                        <Paper key={i}  className={classes.product} >
                            <Grid container className={classes.mainGrid}>
                                <Grid item xs={6}>
                                    <img src={e.image} className={classes.img} alt="" />
                                    <p>{e.address.state}</p>
                                </Grid>
                                <Grid item xs={6} sx={{marginLeft : '0px'}}>
                                    <h3>{e.product_name}</h3>
                                    <p>{e.brand_name}</p>
                                    <h4>${e.price}</h4>
                                    {/* <p>{e.date}</p> */}
                                </Grid>
                                <p>{e.discription}</p>
                            </Grid>
                        </Paper>
                    )
                }
                )}
            </div>
        </>
    )
}

export default Products;
