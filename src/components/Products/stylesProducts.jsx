import { styled } from '@mui/system';


export const Toolbar = styled("div")(({ theme }) => theme.mixins.toolbar);
export const MainPage = styled("main")(({ theme }) => ({
    flexGrow: 1,
    overflowX: "hidden",
    overflowY: "hidden",
}));
export const Content = styled("div")(({ theme }) => ({
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(20),
    paddingTop: theme.spacing(2),
    '@media (max-width: 1600px)': {
        padding: 8,
    },
    '@media (max-width: 700px)': {
        padding: 4,
    }
}));



export const Hero = styled("div")(({ theme }) => ({
    //marginTop: "0vh",
    flexDirection: "column",
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(20),
    backgroundColor: "white",
    '@media (max-width: 1600px)': {
        flexDirection: "column",
        height: "100vh",
        gap: 0,
        paddingTop: 0,
        justifyContent: "center",
    },
    '@media (max-width: 700px)': {
        flexDirection: "column",
        height: "100vh",
        gap: 20,
        paddingTop: 0,
    }
}));
export const HeroContent = styled("div")(({ theme }) => ({

    '@media (max-width: 700px)': {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    }
}));


export const HeroHeader = styled("h1")(({ theme }) => ({
    textAlign: "center",
    color: "#001524",
    fontSize: 68,
    fontFamily: "Poppins",
    fontWeight: "800",
    letterSpacing: -3,
    lineHeight: 0.9,
    wordSpacing: 8,
    margin: "0",
    width: 660,
    paddingBottom: 8,
    '@media (max-width: 1600px)': {
        textAlign: "center",
        color: "#001524",
        fontSize: 60,
        fontFamily: "Poppins",
        fontWeight: "800",
        letterSpacing: -2,
        lineHeight: 1,
        wordSpacing: 4,
        width: 600,
        paddingBottom: 8,
    },
    '@media (max-width: 700px)': {
        textAlign: "center",
        color: "#001524",
        fontSize: 32,
        fontFamily: "Poppins",
        fontWeight: "800",
        letterSpacing: -1.2,
        lineHeight: 1,
        wordSpacing: 4,
        width: 332,
        paddingBottom: 8,
    }
}));

export const HeroDesc = styled("h3")(({ theme }) => ({
    textAlign: "center",
    color: "#455A64",
    fontSize: 24,
    fontFamily: "Raleway",
    paddingBottom: 28,
    fontWeight: "300",
    margin: "0 0 8px ",
    width: 584,
    '@media (max-width: 1600px)': {
        textAlign: "center",
        color: "#455A64",
        fontSize: 24,
        fontFamily: "Raleway",
        paddingBottom: 28,
        width: 584,
    },
    '@media (max-width: 700px)': {
        textAlign: "center",
        color: "#455A64",
        fontSize: 14,
        fontFamily: "Raleway",
        paddingBottom: 28,
        width: 320,
    }
}));
export const HeroImg = styled("img")(({ theme }) => ({
    height: "720px",
    '@media (max-width: 1600px)': {
        height: 480,
    },
    '@media (max-width: 700px)': {
        height: 300,
    }
}));
export const ContentHeader = styled("h3")(({ theme }) => ({
    textAlign: "center",
    color: "#FFF",
    fontSize: 40,
    fontFamily: "Poppins",
    fontWeight: "bolder",
    paddingTop: theme.spacing(5),
    backgroundColor: "#001524",
    margin: "0 !important",
    letterSpacing: "-.8px",
    wordSpacing: "4px",
    '@media (max-width: 700px)': {
        fontSize: 32,
    }
}));

export const ContentFeatured = styled("div")(({ theme }) => ({
    gap: 15,
    padding: theme.spacing(2),
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(10),
    backgroundColor: "#001524",
    '@media (max-width: 700px)': {
        gap: 0,
        padding: theme.spacing(0),
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(7),
    }
}));
export const CategoryFeatured = styled("div")(({ theme }) => ({
    gap: 15,
    padding: theme.spacing(5),
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(10),
    backgroundColor: "#FFF",
    '@media (max-width: 700px)': {
        gap: 0,
        padding: theme.spacing(0),
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(7),
    }
}));
export const CarouselSection = styled("div")(({ theme }) => ({
    display: "none",
}));
export const ButtonSection = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#FFF",
    gap: 28,
    paddingBottom: 28,
}));
export const CategorySection = styled("div")(({ theme }) => ({
    backgroundColor: "#FFF",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
}));
export const CategoryName = styled("div")(({ theme }) => ({
    fontFamily: "Poppins",
    color: "#001524",
    fontSize: 20,
    fontWeight: 500,
}));
export const CategoryButton = styled("button")(({ theme }) => ({
    fontFamily: "Poppins",
    width: 280,
    height: 280,
    color: "#FFF",
    borderRadius: 8,
    fontSize: 60,
    border: "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    "&:hover": { opacity: 0.8, transition: "ease-in-out .4s" },
}));
export const CategoryHeader = styled("h1")(({ theme }) => ({
    textAlign: "center",
    color: "#001524",
    fontSize: 40,
    fontFamily: "Poppins",
    fontWeight: "bolder",
    letterSpacing: "-.8px",
    wordSpacing: "4px",
    '@media (max-width: 700px)': {
        fontSize: 32,
    }
}));
export const CategoryDesc = styled("h3")(({ theme }) => ({
    textAlign: "center",
    color: "#455A64",
    fontSize: 20,
    paddingBottom: theme.spacing(2),
    fontFamily: "Raleway",
    '@media (max-width: 700px)': {
        fontSize: 14,
    }
}));
// root: {
//     flexGrow: 1,
//   },
export const Searchs = styled("div")(({ theme }) => ({
    justifyContent: "center",
    display: "flex",

    '@media (max-width: 1600px)': {
        justifyContent: "center",
    },

    '@media (max-width: 700px)': {
        display: "none",
    }
}))
export const Searchb = styled("input")(({ theme }) => ({
    backgroundColor: "white",
    height: "80%",
    width: "60%",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #001524",
}))
export const BooksHeader = styled("h1")(({ theme }) => ({
    textAlign: "center",
    color: "#001524",
    fontSize: 40,
    fontFamily: "Poppins",
    fontWeight: "bolder",
    paddingTop: theme.spacing(10),
    letterSpacing: "-.8px",
    wordSpacing: "4px",
    '@media (max-width: 700px)': {
        fontSize: 32,
    }
}))
export const BooksDesc = styled("h3")(({ theme }) => ({
    textAlign: "center",
    color: "#455A64",
    fontSize: 20,
    paddingBottom: theme.spacing(2),
    fontFamily: "Raleway",
    '@media (max-width: 700px)': {
        fontSize: 12,
    }
}));
export const ScrollImg = styled('img')({
    position: "absolute",
    right: 0,
    bottom: 40,
    height: 100,
    '@media (max-width: 700px)': {
        // position: "absolute",
        // textAlign: "right",
        // margin: "0 0 20px 0",
        // left: 0,
        // right: 0,
        // bottom: 20,
        // height: 100,
        height: 70
    }
});
export const MobileSearch = styled("div")(({ theme }) => ({
    display: "none",
    '@media (max-width: 700px)': {
        display: "block",
        padding: 32,
        paddingTop: 20,
    }
}))
export const MobSearchb = styled("input")(({ theme }) => ({
    '@media (max-width: 700px)': {
        backgroundColor: "white",
        height: "80%",
        width: "80%",
        padding: "12px",
        borderRadius: "5px",
        border: "1px solid #001524",
    }
}))
export const MobSearchs = styled("div")(({ theme }) => ({
    '@media (max-width: 700px)': {
        justifyContent: "center",
        display: "flex",
    }
}))


