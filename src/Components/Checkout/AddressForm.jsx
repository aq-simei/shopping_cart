import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CountrySelector from "./CountrySelector";
import StateSelector from "./StateSelector";

export default function AddressForm({
  formData,
  onChange,
  onChangeAddressCheckBox,
}) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            value={formData.firstName}
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="lastName"
            name="lastName"
            label="Last name"
            value={formData.lastName || ""}
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            value={formData.address1 || ""}
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            value={formData.address2 || ""}
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            value={formData.zip || ""}
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            value={formData.city || ""}
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CountrySelector
            currentCountry={formData.country}
            onChangeCurrentCountry={onChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <StateSelector
            currentCountry={formData.country}
            currentState={formData.state}
            onChangeCurrentState={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="saveAddress"
                checked={formData.saveAddress}
                onChange={onChangeAddressCheckBox}
              />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
