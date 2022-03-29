import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";

const steps = ["Shipping address", "Payment details", "Review your order"];

const addressFormValidation = (formData) => {
  return Boolean(
    formData?.firstName &&
      formData?.address1 &&
      formData?.zip &&
      formData?.city &&
      formData?.country &&
      formData?.state
  );
};
const paymentFormValidation = (formData) => {
  return Boolean(
    formData?.cardName &&
      formData?.cardNumber &&
      formData?.cvv &&
      formData?.expDate
  );
};

const checkValidation = (step, formData) => {
  switch (step) {
    case 0:
      return addressFormValidation(formData);
    case 1:
      return paymentFormValidation(formData);
    case 2:
      return true;
  }
};

export default function Checkout({ products }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [addressFormData, setAddressFormData] = React.useState({
    country: "",
    state: "",
    firstName: "",
    saveAddress: false,
    saveCard: false,
  });

  const [paymentFormData, setPaymentFormData] = React.useState({});

  const handleChangePaymentFormData = (event) => {
    const { name, value } = event.target;
    setPaymentFormData({ ...paymentFormData, [name]: value });
  };

  const handleChangeAddressFormData = (event) => {
    const { name, value } = event.target;
    if (name === "country") {
      setAddressFormData({ ...addressFormData, state: "", country: value });
    } else {
      setAddressFormData({ ...addressFormData, [name]: value });
    }
  };

  const handleChangePaymentCheckBox = (event) => {
    const { checked } = event.target;
    setPaymentFormData({ ...paymentFormData, saveCard: checked });
  };

  const handleChangeAddressCheckBox = (event) => {
    const { checked } = event.target;
    setAddressFormData({ ...addressFormData, saveAddress: checked });
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleNext();
  };

  const currentFormData = { ...addressFormData, ...paymentFormData };

  function getStepContent() {
    switch (activeStep) {
      case 0:
        return (
          <AddressForm
            formData={addressFormData}
            handleChange={handleChangeAddressFormData}
            handleChangeAddressCheckBox={handleChangeAddressCheckBox}
          />
        );
      case 1:
        return (
          <PaymentForm
            formData={paymentFormData}
            onChange={handleChangePaymentFormData}
            handleChangePaymentCheckBox={handleChangePaymentCheckBox}
          />
        );
      case 2:
        return <Review formData={currentFormData} products={products} />;
      default:
        throw new Error("Unknown step");
    }
  }

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper
        onSubmit={handleSubmit}
        component="form"
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
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
              {getStepContent()}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  type="submit"
                  sx={{ mt: 3, ml: 1 }}
                  disabled={!checkValidation(activeStep, currentFormData)}
                >
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </React.Fragment>
      </Paper>
    </Container>
  );
}
