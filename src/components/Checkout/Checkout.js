import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step, onChange, formValues, errors, cartItems) {
  switch (step) {
    case 0:
      return <AddressForm onChange={onChange} formValues={formValues} errors={errors}/>;
    case 1:
      return <PaymentForm onChange={onChange} formValues={formValues} errors={errors}/>;
    case 2:
      return <Review formValues={formValues} cartItems={cartItems}/>;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

const getIsFormValid = (formValues, errors, step) => {
  if(step===0){
    if(errors.name || !formValues.name){
      return false
    }
    if(errors.lastName || !formValues.lastName){
      return false
    }
    if(errors.addressFirst || !formValues.addressFirst){
      return false
    }
    if(errors.zip || !formValues.zip){
      return false
    }
    if(errors.city || !formValues.city){
      return false
    }
    if(!formValues.province){
      return false
    }
    if(!formValues.country){
      return false
    }
  }
  if(step===1){
    if(errors.cardName || !formValues.cardName){
      return false
    }
    if(errors.cardNumber || !formValues.cardNumber){
      return false
    }
    if(errors.expDate || !formValues.expDate){
      return false
    }
    if(!formValues.ccv){
      return false
    }
  }
    return true
}

const getFormErrors = (formValues) => {
  const errors = {}
  if(formValues.name === ''){
    errors.name = 'Required field' 
  }
  if(formValues.lastName === ''){
    errors.lastName = 'Required field' 
  }
  if(formValues.addressFirst === ''){
    errors.addressFirst = 'Required field' 
  }
  if(formValues.zip === ''){
    errors.zip = 'Required field' 
  }
  if(formValues.city === ''){
    errors.city = 'Required field' 
  }
  if(formValues.cardName === ''){
    errors.cardName = 'Required field' 
  }
  if(formValues.cardNumber === ''){
    errors.cardNumber = 'Required field' 
  }
  if(formValues.expDate === ''){
    errors.expDate = 'Required field' 
  }
  if(formValues.ccv === ''){
    errors.ccv = 'Required field' 
  }
  return errors
}

export default function Checkout({ cartItems }) {
  const [activeStep, setActiveStep] = React.useState(0);

  const [formValues, setFormValues] = React.useState({});
  
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const onFormChange = (fieldName, fieldValue) => {
    setFormValues({...formValues, [fieldName]:fieldValue})
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const errors = getFormErrors(formValues)

  const isValid = getIsFormValid(formValues, errors, activeStep)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper component="form" onSubmit={handleSubmit} variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, onFormChange, formValues, errors, cartItems)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    type="submit"
                    disabled={!isValid}
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
