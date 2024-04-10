
import { Typography, Button, Card, CardActions, CardContent, CardMedia, Box, IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';



const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {

    const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

    const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);


    return (
        <Card>
            <CardMedia image={item.image.url} alt={item.name}
                sx={{
                    height: 0,
                    paddingTop: '100%',
                }}
            />
            <CardContent
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Typography variant="h6">
                    {item.name}
                </Typography>
                <Typography
                    variant="h6"
                    color='error'
                >{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions
                sx={{
                    justifyContent: 'space-between',
                }}
            >
                {/* <Box display="flex" alignItems="center">
                    <Button
                        type="button"
                        size="small"
                        onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
                    >
                        -
                    </Button>
                    <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
                    <Button
                        type="button"
                        size="small"
                        onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
                    >
                        +
                    </Button>
                </Box> */}
                <Box display="flex" alignItems="center" sx={{ gap: '8px' }}>
                    <IconButton
                        type="button"
                        size="small"
                        onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
                    >
                        <RemoveIcon />
                    </IconButton>
                    <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
                    <IconButton
                        type="button"
                        size="small"
                        onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
                    >
                        <AddIcon />
                    </IconButton>
                </Box>
                <Button
                    variant="contained"
                    type="button"
                    color='error'
                    onClick={() => handleRemoveFromCart(item.id)}
                    sx={{ color: 'white', width: '100%', height: '40px' }}
                >Remove</Button>
            </CardActions>
        </Card>
    );
};

export default CartItem;
