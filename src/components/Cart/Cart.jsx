import { Container, Typography, Button, Grid } from '@mui/material';
import {
    CardDetails,
    Toolbar,

} from "./styles.js";

import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem.jsx';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {

    const handleEmptyCart = () => onEmptyCart();

    const renderEmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart,
            <Link to="/"> start adding some</Link>!
        </Typography>
    );
    // console.log(cart)
    if (!cart?.line_items) return 'Loading';

    const renderCart = () => (
        <>
            <Grid container spacing={4}>
                {cart.line_items.map((lineItem) => (
                    <Grid item xs={12} sm={4} key={lineItem.id}>
                        <CartItem
                            item={lineItem}
                            onUpdateCartQty={onUpdateCartQty}
                            onRemoveFromCart={onRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <CardDetails>
                <Typography variant="h5" >Subtotal: <b >{cart.subtotal.formatted_with_symbol}</b></Typography>
                <div>
                    <Button
                        size="large"
                        type="button"
                        variant="contained"
                        color="error"
                        onClick={handleEmptyCart}
                        sx={{
                            minWidth: '150px',
                            '@media (max-width:600px)': {
                                marginBottom: '5px',
                            },
                            '@media (min-width:600px)': {
                                marginRight: '20px',
                            },
                            //bgcolor: 'secondary.main',
                        }}
                    >Empty cart</Button>
                    <Button
                        component={Link}
                        to="/checkout"
                        size="large"
                        type="button"
                        variant="contained"
                        sx={{
                            minWidth: '150px',
                            background: '#001524',
                            color: 'white',
                            height: '40px',
                            '&:hover': {
                                backgroundColor: '#2a344a',
                                boxShadow: 'none',
                                color: 'white'
                            }
                        }}
                    >Checkout</Button>
                </div>
            </CardDetails>
        </>
    );
    return (
        <Container>
            <Toolbar />
            <Typography variant="h5" gutterBottom sx={{ marginTop: '3%' }}
            ><b>Your Shopping Cart</b></Typography>
            <hr />
            {!cart.line_items.length ? renderEmptyCart() : renderCart()}
        </Container>
    )
}
export default Cart;