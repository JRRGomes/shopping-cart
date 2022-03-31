import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { MenuItem, Select } from '@mui/material';
import COUNTRIES_STATES from '../../constants/countriesStates.json';
import { Input, InputLabel, Text } from '../../components'

export default function AddressForm({onChange, formValues, errors}) {

  const zip = formValues.zip || ''
  const name = formValues.name || ''
  const lastName = formValues.lastName || ''
  const addressFirst = formValues.addressFirst || ''
  const addressSecond = formValues.addressSecond || ''
  const city = formValues.city || ''
  const countrySelected = formValues.country || ''
  const provinceSelected = formValues.province || ''
  const countrySelectedObj = COUNTRIES_STATES.countries.find((countryObj)=>(countryObj.country === countrySelected))
  const countryStates = countrySelectedObj?.states || [];

  const handleChangeZip = (event) => {
    onChange('zip', event.target.value)
  }

  const handleChangeName = (event) => {
    onChange('name', event.target.value)
  }

  const handleChangeLastName = (event) => {
    onChange('lastName', event.target.value)
  }

  const handleChangeAddressFirst = (event) => {
    onChange('addressFirst', event.target.value)
  }
  
  const handleChangeAddressSecond = (event) => {
    onChange('addressSecond', event.target.value)
  }

  const handleChangeCity = (event) => {
    onChange('city', event.target.value)
  }

  const handleCountryChange = (event) => {
    onChange('country', event.target.value)
  }

  const handleProvinceChange = (event) => {
    onChange('province', event.target.value)
  }

  return (
    <React.Fragment>
      <Text variant="h3" gutterBottom>
        Shipping address
      </Text>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputLabel>First Name *</InputLabel>
          <Input
            required
            placeholder='John'
            id="firstName"
            name="firstName"
            label="First name"
            autoComplete="given-name"
            variant="standard"
            value={name}
            onChange={handleChangeName}
            error={Boolean(errors.name)}
            helperText={errors?.name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel>Last Name *</InputLabel>
          <Input
            required
            placeholder='Doe'
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={lastName}
            onChange={handleChangeLastName}
            error={Boolean(errors.lastName)}
            helperText={errors?.lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Address line 1 *</InputLabel>
          <Input
            required
            placeholder='Address line 1'
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={addressFirst}
            onChange={handleChangeAddressFirst}
            error={Boolean(errors.addressFirst)}
            helperText={errors?.addressFirst}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Address line 2</InputLabel>
          <Input
            placeholder='Address line 2'
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            value={addressSecond}
            onChange={handleChangeAddressSecond}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel>Zip / Postal code *</InputLabel>
          <Input
            required
            placeholder='Zip / Postal code'
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={zip}
            onChange={handleChangeZip}
            error={Boolean(errors.zip)}
            helperText={errors?.zip}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel>City *</InputLabel>
          <Input
            required
            placeholder='City'
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={city}
            onChange={handleChangeCity}
            error={Boolean(errors.city)}
            helperText={errors?.city}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel>Country *</InputLabel>
          <Input
            as='select'
            required
            labelId="country-select-label"
            fullWidth
            variant='standard'
            value={countrySelected}
            onChange={handleCountryChange}
            >
            {COUNTRIES_STATES.countries.map((countriesObj) => (
              <option key={countriesObj.country} value={countriesObj.country}>{countriesObj.country}</option>
            ))}
          </Input>
          <FormHelperText>Required field</FormHelperText>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel>State/Province/Region *</InputLabel>
          <Input
            as='select'
            required
            labelId="state-select-label"
            fullWidth
            variant='standard'
            value={provinceSelected}
            onChange={handleProvinceChange}
            >
            {countryStates.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
            </Input>
            <FormHelperText>Required field</FormHelperText>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
