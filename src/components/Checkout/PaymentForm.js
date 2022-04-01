import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Input, InputLabel, Text } from '../../components';

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
      <Text variant="h3" gutterBottom>
        Payment method
      </Text>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <InputLabel>Card Name *</InputLabel>
          <Input
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={cardName}
            onChange={handleCardName}
            error={Boolean(errors.cardName)}
            helperText={errors?.cardName}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel>Card Number *</InputLabel>
          <Input
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={cardNumber}
            onChange={handleCardNumber}
            error={Boolean(errors.cardNumber)}
            helperText={errors?.cardNumber}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel>Expiry date *</InputLabel>
          <Input
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            value={expDate}
            onChange={handleExpDate}
            error={Boolean(errors.expDate)}
            helperText={errors?.expDate}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel>CCV *</InputLabel>
          <Input
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            value={ccv}
            onChange={handleCcv}
            error={Boolean(errors.ccv)}
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
