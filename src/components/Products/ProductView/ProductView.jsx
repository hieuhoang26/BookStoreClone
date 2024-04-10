
import { Container, Grid, Button, Typography, Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { commerce } from "../../lib/Commerce.js";
import { useState, useEffect } from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import "./style.css";

const createMarkup = (text) => {
    return { __html: text };
};

const ProductView = () => {
    const [product, setProduct] = useState({});

    const fetchProduct = async (id) => {
        const response = await commerce.products.retrieve(id);
        console.log({ response });
        const { name, price, image, quantity, description } = response;
        setProduct({
            name,
            quantity,
            description,
            src: image.url,
            price: price.formatted_with_symbol,
        });
    };

    useEffect(() => {
        const id = window.location.pathname.split("/");
        fetchProduct(id[2]);
    }, []);

    return (
        <Container className="product-view">
            <Grid container>
                <Grid item xs={12} md={5} className="image-wrapper">
                    <img src={product.src} alt={product.name} />
                </Grid>
                <Grid item xs={12} md={7} className="text">
                    <Typography variant="h2">
                        <b>{product.name}</b>
                    </Typography>

                    <Grid container>
                        <Grid xs={6}>
                            <p>Nhà cung cấp: </p>
                        </Grid>
                        <Grid xs={6}>
                            <p>Tác giả: </p>
                        </Grid>
                        <Grid xs={6}>
                            <p>Nhà xuất bản: </p>
                        </Grid>
                        <Grid xs={6}>
                            <p>Hình thức bìa: </p>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center">
                        <Grid item xs={12}>
                            <Typography variant="h3" sx={{
                                fontSize: '32px',
                                lineHeight: '32px',
                                color: '#C92127',
                                fontFamily: "'Roboto', sans-serif",
                                fontWeight: 700,
                            }}>
                                <b>{product.price}</b>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} container>
                            <Grid item xs={2} className="quantity-label">
                                Số lượng:
                            </Grid>
                            <Grid item xs={3}>
                                <Box display="flex" alignItems="center" sx={{ gap: '8px' }}>
                                    <IconButton
                                        type="button"
                                        size="small"
                                    // onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
                                    >
                                        <RemoveIcon />
                                    </IconButton>
                                    {/* <Typography>&nbsp;{item.quantity}&nbsp;</Typography> */}
                                    <Typography>1</Typography>
                                    <IconButton
                                        type="button"
                                        size="small"
                                    // onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
                                    >
                                        <AddIcon />
                                    </IconButton>
                                </Box>
                            </Grid>
                        </Grid>

                    </Grid>

                    <br />
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                size="large"
                                className="add-cart-button"
                                component={Link}
                                to="/cart"
                            >
                                Thêm vào giỏ hàng
                            </Button>
                        </Grid>

                    </Grid>
                    <br />

                    <Typography
                        variant="p"
                        className="description"
                        dangerouslySetInnerHTML={createMarkup(product.description)}
                    />
                </Grid>




            </Grid>
        </Container>
    );
};

export default ProductView;
