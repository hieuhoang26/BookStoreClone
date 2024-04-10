import { styled } from '@mui/system';

const Toolbar = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar
}));

// const Title = styled('div')({
//     marginTop: '3%'
// });

// const EmptyButton = styled('button')(({ theme }) => ({
//     minWidth: '150px',
//     [theme.breakpoints.down('xs')]: {
//         marginBottom: '5px'
//     },
//     [theme.breakpoints.up('xs')]: {
//         marginRight: '20px'
//     }
// }));

// const CheckoutButton = styled('button')(({ theme }) => ({
//     minWidth: '150px',
//     background: '#001524',
//     color: 'white',
//     height: '40px',
//     '&:hover': {
//         backgroundColor: '#2a344a',
//         boxShadow: 'none',
//         color: 'white'
//     }
// }));

const Link = styled('a')({
    textDecoration: 'none'
});

const CardDetails = styled('div')({
    display: 'flex',
    marginTop: '7%',
    width: '100%',
    justifyContent: 'space-between'
});

export { Toolbar, Link, CardDetails };
