import { Container, Grid, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { commerce } from "../lib/Commerce.js";
import { useState, useEffect } from "react";
import Product from '../Products/Product/Product.jsx'
import {
    MainPage,
    CategorySection,
    CategoryHeader,
    CategoryDesc,
    CategoryFeatured,
    Toolbar
} from "../Products/stylesProducts.jsx";


const Manga = ({ onAddToCart, mangaProducts }) => {
    return (
        <>
            <MainPage>
                <Toolbar />

                <CategorySection>
                    <CategoryHeader>
                        Anime <span style={{ color: "#f1361d" }}>Manga</span>
                    </CategoryHeader>
                    <CategoryDesc>Browse our handpicked selection of manga series</CategoryDesc>

                    <Grid container
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "20px"
                        }}
                    >
                        {mangaProducts.map((product) => (
                            <Grid item xs={8} sm={6} md={4} lg={2} key={product.id}>
                                <Product product={product} onAddToCart={onAddToCart} />
                            </Grid>
                        ))}
                    </Grid>


                </CategorySection>
            </MainPage>
        </>
    );
};

export default Manga;