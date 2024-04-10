import { CssBaseline, Step, Stepper, Typography, StepLabel, Divider, Button, CircularProgress, Paper } from "@mui/material";
import { Toolbar, Layout, StyledPaper, Spinner } from "./styles";
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { commerce } from '../../lib/Commerce.js';
import { Box, useTheme } from '@mui/system';


const steps = ['Shipping address', 'Payment details'];

const Checkout = ({ cart, onCaptureCheckout, order, error }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});
    const navigate = useNavigate(); // thực hiện điều hướng 
    const theme = useTheme();


    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    //generateToken
    useEffect(() => {
        if (cart.id) {
            const generateToken = async () => {
                try {
                    const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                    setCheckoutToken(token);
                } catch {
                    if (activeStep !== steps.length) navigate("/");
                }
            };

            generateToken();
        }
    }, [cart]);

    const test = (data) => {
        setShippingData(data);
        nextStep();
    };

    let Confirmation = () => (order.customer ? (
        <>
            <div>
                <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
                <Divider sx={{ margin: '20px 0' }} />
                <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
            </div>
            <br />
            <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
        </>
    ) : (
        <Spinner>
            <CircularProgress />
        </Spinner>
    ));


    if (error) {
        // eslint-disable-next-line react/display-name
        Confirmation = () => (
            <>
                <Typography variant="h5">Error: {error.message}</Typography>
                <br />
                <Button component={Link} variant="outlined" to="/">Back to home</Button>
            </>
        );
    }


    const Form = () => (activeStep === 0
        ? <AddressForm
            checkoutToken={checkoutToken}
            nextStep={nextStep}
            setShippingData={setShippingData}
            test={test} />
        : <PaymentForm
            checkoutToken={checkoutToken}
            nextStep={nextStep}
            backStep={backStep}
            shippingData={shippingData}
            onCaptureCheckout={onCaptureCheckout}
        />);

    return (
        <>
            <CssBaseline />
            <Toolbar />
            <main
                style={{
                    marginTop: '5%',
                    width: "60%",
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                <StyledPaper>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep}
                        sx={{
                            padding: (theme) => theme.spacing(3, 0, 5),
                        }}
                    >
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                </StyledPaper>
            </main>
        </>
    )
}
export default Checkout;