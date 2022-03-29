import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function PaymentForm({
  formData,
  onChange,
  handleChangePaymentCheckBox,
}) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            name="cardName"
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            onChange={onChange}
            value={formData.cardName || ""}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="cardNumber"
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            onChange={onChange}
            value={formData.cardNumber || ""}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="expDate"
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            onChange={onChange}
            value={formData.expDate || ""}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="cvv"
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            onChange={onChange}
            value={formData.cvv || ""}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            checked={formData.saveCard || false}
            onChange={handleChangePaymentCheckBox}
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
