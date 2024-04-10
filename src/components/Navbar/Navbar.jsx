import { AppBar, Toolbar, IconButton, Badge, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import logo from "../../assets/circles.png";
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';

import { Grow, Title } from "./styles"; // Thay thế import này

const Navbar = ({ totalItems }) => {

    return (
        <AppBar sx={{ bgcolor: '#001524', borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>
            <Toolbar>
                <Typography
                    component={Link}
                    to="/"
                    variant="h5"
                    color="inherit"
                    sx={{
                        textDecoration: 'none',
                    }}
                >
                    <Title>
                        <img
                            src={logo}
                            alt="Book Store App"
                            height="50px"
                        />
                        <div>BOOKSHOP</div>
                    </Title>

                </Typography>
                <Grow />

                <IconButton
                    component={Link}
                    to="/cart"
                    aria-label="Show cart items"
                    color="inherit"
                    sx={{ '&:hover': { color: '#ffff', boxShadow: 'none' }, marginRight: '20px' }}
                >
                    <Badge color="secondary" badgeContent={totalItems}>
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                <Button
                    variant="outlined"
                    startIcon={<PersonIcon />}
                    component={Link}
                    to="/login"
                    sx={{
                        color: 'white',
                        '&:hover': {
                            color: '#ffff',
                            boxShadow: 'none',
                        },
                    }}
                >
                    Login
                </Button>

            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
