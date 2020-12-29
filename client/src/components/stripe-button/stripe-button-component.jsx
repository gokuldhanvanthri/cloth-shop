import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Hvk6tI6iSFuzOMZbjyhjJ9UqVXAcMOSOF2O3DgqpAAzXa3PlZVgVRZWQf9JyIH17gwseOnC4u1hFWp1GKL6ZgOt00vDDI1pr7";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "POST",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment successful");
      })
      .catch((error) => {
        console.log("Payment error: ", error);
        alert(
          "There was an issue with your payment. Please be sure that you used the provided credit card"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Cool Clothing ltd"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
