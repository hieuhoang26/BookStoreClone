import { styled } from '@mui/system';
import { Paper } from "@mui/material";

const Toolbar = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar
}));

const Layout = styled('div')(({ theme }) => ({
    marginTop: '5%',
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}));
const StyledPaper = styled(Paper)(({ theme }) => ({
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
        width: '100%',
        marginTop: 60,
    },
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
    },
}));

const Stepper = styled('div')(({ theme }) => ({
    padding: theme.spacing(3, 0, 5),
}));

const Buttons = styled('div')({
    display: 'flex',
    justifyContent: 'flex-end',
});

const Button = styled('button')(({ theme }) => ({
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
}));

const Divider = styled('hr')({
    margin: '20px 0',
});

const Spinner = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

export {
    Layout,
    Toolbar,
    StyledPaper,
    Stepper,
    Buttons,
    Button,
    Divider,
    Spinner,
};
