import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

export default function Review({ formData, products }) {
  const fullAddress = `${formData.address1}, ${formData.city}, ${formData.state} ${formData.zip} ${formData.country}`;

  const formatCardNumber = (cardNumber) => {
    const last4Digits = cardNumber.slice(-4);
    return ` XXXX-XXXX-XXXX-${last4Digits}`;
  };

  const formatDescription = (product) => {
    const numberPrice = product.description.split("R$")[1];
    return parseFloat(numberPrice).toFixed(2);
  };

  const totalPrice = (products) => {
    return products.reduce((acc, product) => {
      console.log(product.price);
      return acc + product.price;
    }, 0);
  };

  const payments = [
    { name: "Card type", detail: "Visa" },
    { name: "Card holder", detail: formData.cardName },
    { name: "Card number", detail: formatCardNumber(formData.cardNumber) },
    { name: "Expiry date", detail: "04/2024" },
  ];
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} />
            <Typography variant="body2">
              {product.description}
              {product.price.toFixed(2)}
            </Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {`R$ ${totalPrice(products).toFixed(2)}`}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            {formData.firstName}
            {formData.lastName}
          </Typography>
          <Typography gutterBottom>{fullAddress}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
