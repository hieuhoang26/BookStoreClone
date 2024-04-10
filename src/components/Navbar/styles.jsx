import { styled } from '@mui/system';

const drawerWidth = 0;

const AppBar = styled('div')(({ theme }) => ({
  color: "white",
  boxShadow: "none",
  background: "#001524",
  borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  [theme.breakpoints.up("sm")]: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
}));

const Title = styled('div')(() => ({
  flexGrow: 1,
  alignItems: "center",
  display: "flex",
  fontFamily: "Raleway",
  fontWeight: 600,
  letterSpacing: 1,

  "&:hover": {
    color: "#ffff",
    boxShadow: "none",
  },
  "& img": {
    marginRight: "10px", // Adjust this value as needed
  },
}));

const Cart = styled('div')({
  "&:hover": {
    color: "#ffff",
    boxShadow: "none",
  },
});

const Image = styled('div')(() => ({
  marginRight: "10px",
}));

const MenuButton = styled('div')(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Grow = styled('div')({
  flexGrow: 1,
});

const InputRoot = styled('div')({
  color: "inherit",
});

const InputInput = styled('input')(({ theme }) => ({
  padding: theme.spacing(1, 1, 1, 0),
  paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  transition: theme.transitions.create("width"),
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "20ch",
  },
}));

export {
  AppBar,
  Title,
  Cart,
  Image,
  MenuButton,
  Grow,
  InputRoot,
  InputInput,
};
