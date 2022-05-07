import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';



const Header = () => {

    return (

        <Grid container direction="row" justify="space-between" alignItems="center" xs={11}>
            <Typography variant='h3' component='h2' display='block' gutterBottom fontFamily='Helvetica'>
                Shirt Store
            </Typography>
            <Link to="/">
                <Button variant="contained">Home</Button>
            </Link>
            <Link to="/contato">
                <Button variant="contained">Contato</Button>
            </Link>
            <Cart />
        </Grid>

    )
}

export default Header;
