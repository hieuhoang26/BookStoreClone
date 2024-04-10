import { Grid, Input, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import scrollImg from "../../assets/scroll.gif";
import logo1 from "../../assets/Bookshop.gif";
import mangaBg from "../../assets/maxresdefault.jpg";
import bioBg from "../../assets/biography.jpg";
import fictionBg from "../../assets/fiction.jpg";
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
    MainPage,
    Toolbar,
    ScrollImg,
    Hero,
    HeroImg,
    HeroContent,
    HeroHeader,
    HeroDesc,
    Searchs,
    Searchb,
    CategorySection,
    CategoryHeader,
    CategoryDesc,
    CategoryButton,
    CategoryName,
    ButtonSection,
    CarouselSection,
    ContentHeader,
    ContentFeatured,
    BooksHeader,
    BooksDesc,
    MobileSearch,
    MobSearchb,
    MobSearchs,

} from './stylesProducts'
import { useRef, useState } from 'react';
import Product from './Product/Product'
const Products = ({ products, featureProducts, onAddToCart }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const sectionRef = useRef(null);
    const handleInputClick = () => {
        // Scrolls to the section when the input is clicked
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <>
            <MainPage>
                <Toolbar />
                <ScrollImg src={scrollImg} />
                <Hero>
                    <HeroImg src={logo1} />
                    <HeroContent>
                        <HeroHeader>
                            Discover Your Next Favorite Book Here.
                        </HeroHeader>
                        <HeroDesc ref={sectionRef}>
                            Explore our curated collection of new and popular books to find your
                            next literary adventure.
                        </HeroDesc>
                        <Searchs>
                            <Input
                                type="text"
                                placeholder="Which book are you looking for?"
                                onClick={handleInputClick}
                                onChange={(event) => {
                                    setSearchTerm(event.target.value);
                                }}
                                sx={{
                                    backgroundColor: "white",
                                    height: "80%",
                                    width: "60%",
                                    padding: "12px",
                                    borderRadius: "6px",
                                    border: "1px solid #001524",
                                }}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                }
                            />
                        </Searchs>
                    </HeroContent>
                </Hero>

                {searchTerm === "" && (
                    <CategorySection>
                        <CategoryHeader>Browse our featured categories</CategoryHeader>
                        <CategoryDesc>Browse our featured categories</CategoryDesc>
                        <ButtonSection>
                            <div>
                                <Link to="manga">
                                    <CategoryButton
                                        sx={{ backgroundImage: `url(${mangaBg})` }}
                                    />
                                </Link>
                                <CategoryName>Manga</CategoryName>
                            </div>
                            <div>
                                <Link to="biography">
                                    <CategoryButton
                                        sx={{ backgroundImage: `url(${bioBg})` }}
                                    />
                                </Link>
                                <CategoryName>Biography</CategoryName>
                            </div>
                            <div>
                                <Link to="fiction">
                                    <CategoryButton
                                        sx={{ backgroundImage: `url(${fictionBg})` }}
                                    />
                                </Link>
                                <CategoryName>Fiction</CategoryName>
                            </div>
                        </ButtonSection>
                    </CategorySection>
                )}

                {/* <CarouselSection>
                    <Carousel
                        showIndicators={false}
                        autoPlay={true}
                        infiniteLoop={true}
                        showArrows={true}
                        showStatus={false}
                    >
                        <div>
                            <Link to="manga">
                                <CategoryButton style={{ backgroundImage: `url(${mangaBg})` }}></CategoryButton>
                            </Link>
                            <CategoryName>Manga</CategoryName>
                        </div>
                        <div>
                            <Link to="biography">
                                <CategoryButton style={{ backgroundImage: `url(${bioBg})` }}></CategoryButton>
                            </Link>
                            <CategoryName>Biography</CategoryName>
                        </div>
                        <div>
                            <Link to="fiction">
                                <CategoryButton style={{ backgroundImage: `url(${fictionBg})` }}></CategoryButton>
                            </Link>
                            <CategoryName>Fiction</CategoryName>
                        </div>
                    </Carousel>
                </CarouselSection> */}
                {/* Besst Seller  */}
                {searchTerm === "" && (
                    <div>
                        <ContentHeader>
                            Best <span style={{ color: "#f1361d" }} >Sellers</span>
                        </ContentHeader>
                        <Grid container
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                // padding: "20px",
                                paddingTop: "20px",
                                paddingBottom: "40px",
                                backgroundColor: "#001524",
                                height: "100%",
                            }}>
                            {featureProducts.map((product) => (
                                <Grid item xs={6} sm={5} md={3} lg={2} key={product.id}
                                    sx={{
                                        width: "100%",
                                        padding: "20px",
                                    }}
                                >
                                    <Product product={product} onAddToCart={onAddToCart} />
                                </Grid>
                            ))}
                        </Grid>

                    </div>
                )}
                {/* List book */}
                <div>
                    {searchTerm === "" && (
                        <>
                            <BooksHeader>
                                Discover <span style={{ color: "#f1361d" }}>Books</span>
                            </BooksHeader>
                            <BooksDesc>
                                Explore our comprehensive collection of books.
                            </BooksDesc>
                        </>
                    )}
                    <MobileSearch>
                        <MobSearchs>
                            <MobSearchb
                                type="text"
                                placeholder="Search for books"
                                onChange={(event) => {
                                    setSearchTerm(event.target.value);
                                }}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                }
                            />
                        </MobSearchs>
                    </MobileSearch>
                    <Grid container justify="center" spacing={2}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "15px",
                            spacing: "3"
                        }}>

                        {products
                            .filter((product) => {
                                if (searchTerm === "") {
                                    return product;
                                } else if (
                                    product.name
                                        .toLowerCase()
                                        .includes(searchTerm.toLocaleLowerCase())
                                ) {
                                    return product;
                                }
                            })
                            .map((product) => (
                                <Grid item xs={6} sm={5} md={4} lg={2} key={product.id}>

                                    <Product product={product} onAddToCart={onAddToCart} />
                                </Grid>
                            ))}
                    </Grid>
                </div>

            </MainPage>
        </>
    )
}
export default Products