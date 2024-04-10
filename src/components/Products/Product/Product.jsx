import React from "react";
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,
    CardActionArea,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";


const Product = ({ product, onAddToCart }) => {
    return (
        <StyledCard>
            <Link to={`product-view/${product.id}`}>
                <CardActionArea>
                    <StyledCardMedia image={product.image.url} title={product.name} />
                </CardActionArea>
            </Link>
            <CardContent sx={{
                textAlign: "center"
            }}>
                <StyledCardContent>
                    <StyledCardContentName>{product.name}</StyledCardContentName>
                </StyledCardContent>
                <StyledCardContentPrice >
                    <b>{product.price.formatted_with_symbol}</b>
                </StyledCardContentPrice>

            </CardContent>
            <StyledCardActions disableSpacing>
                <StyledButton
                    variant="contained"
                    endIcon={<AddShoppingCart />}
                    onClick={() => onAddToCart(product.id, 1)}
                >
                    <b>ADD TO CART</b>
                </StyledButton>
            </StyledCardActions>
        </StyledCard>
    );
};
const StyledCard = styled(Card)({
    maxWidth: "100%",
    background: "linear-gradient(45deg, #D9D9D9 30%, #E6E6E6 90%)",
});

const StyledCardMedia = styled(CardMedia)({
    height: 0,
    paddingTop: "105%",
    "&:hover": {
        backgroundColor: "#2a344a",
        boxShadow: "none",
    },
});

const StyledCardActions = styled(CardActions)({
    display: "flex",
    justifyContent: "flex-end",
});

const StyledCardContent = styled(CardContent)({
    display: "flex",
    justifyContent: "center",
    padding: "0"
});

const StyledButton = styled(Button)({
    background: "#001524",
    color: "white",
    width: "100%",
    height: "40px",
    "&:hover": {
        backgroundColor: "#2a344a",
        boxShadow: "none",
    },
});

const StyledCardContentName = styled("p")({
    fontSize: 20,
    textAlign: "center",
    margin: "4px !important",
    fontWeight: 500,
});

const StyledCardContentPrice = styled("p")({
    fontSize: 20,
    color: "#F1361D",
    margin: "0 !important",
});

export default Product;
