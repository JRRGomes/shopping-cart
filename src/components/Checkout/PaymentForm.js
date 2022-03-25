import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function PaymentForm({onChange, formValues, errors}) {

  const cardName = formValues.cardName || '';
  const cardNumber = formValues.cardNumber || '';
  const expDate = formValues.expDate || '';
  const ccv = formValues.ccv || '';
  
  const handleCardName = (event) => {
    onChange('cardName', event.target.value)
  }

  const handleCardNumber = (event) => {
    onChange('cardNumber', event.target.value)
  }

  const handleExpDate = (event) => {
    onChange('expDate', event.target.value)
  }

  const handleCcv = (event) => {
    onChange('ccv', event.target.value)
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={cardName}
            onChange={handleCardName}
            error={errors.cardName ? true : false}
            helperText={errors?.cardName}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={cardNumber}
            onChange={handleCardNumber}
            error={errors.cardNumber ? true : false}
            helperText={errors?.cardNumber}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            value={expDate}
            onChange={handleExpDate}
            error={errors.expDate ? true : false}
            helperText={errors?.expDate}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            value={ccv}
            onChange={handleCcv}
            error={errors.ccv ? true : false}
            helperText={errors?.ccv}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
