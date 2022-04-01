import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { Text } from '../../components'

export default function Review({ formValues, cartItems }) {

  const maskedCardNumber = `xxxx-xxxx-xxxx-${formValues.cardNumber.slice(-4)}`
  const payments = [
    { name: 'Card type', detail: 'Visa' },
    { name: 'Card holder', detail: formValues.cardName },
    { name: 'Card number', detail: maskedCardNumber },
    { name: 'Expiry date', detail: formValues.expDate },
  ];

  const total = cartItems?.map((item) => Number(item.price))
    .reduce((item1, item2) => item1 + item2, 0)

  return (
    <React.Fragment>
      <Text variant="h3">
        Order summary
      </Text>
      <List disablePadding>
        {cartItems?.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.description} />
            <Text>${product.price}</Text>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Text fontWeight='bold'>
            ${total}
          </Text>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Text variant="h3" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Text>
          <Text gutterBottom>{formValues.name} {formValues.lastName}</Text>
          <Text gutterBottom>{formValues.addressFirst}, {formValues.addressSecond}</Text>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Text variant="h3">
            Payment details
          </Text>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Text>{payment.name}</Text>
                </Grid>
                <Grid item xs={6}>
                  <Text>{payment.detail}</Text>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
