import React, { useState, useEffect } from 'react';
import { CardElement, Elements, useStripe, useElements, PaymentRequestButtonElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { stripe_publishableKey } from '../../Constants.js';

const stripePromise = loadStripe(stripe_publishableKey);

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [totalAmount, setTotalAmount] = useState('');
  const [billingDetails, setBillingDetails] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  });
  const [canMakePayment, setCanMakePayment] = useState(false);

  useEffect(() => {
    const checkPaymentAvailability = async () => {
      if (stripe) {
        const { error } = await stripe.paymentRequest.canMakePayment();
        setCanMakePayment(!error);
      }
    };

    checkPaymentAvailability();
  }, [stripe]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.error('Stripe.js has not loaded.');
      return;
    }

    // Create a payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        name: billingDetails.name,
        address: {
          line1: billingDetails.address,
          city: billingDetails.city,
          state: billingDetails.state,
          postal_code: billingDetails.postalCode,
          country: billingDetails.country,
        },
      },
    });

    if (error) {
      console.error('Error:', error.message);
      return;
    }

    // Send the totalAmount, paymentMethod, and any additional information to your server for further processing
    // Example: call a function to make a POST request to your server
    processPayment(totalAmount, paymentMethod);
  };

  const handleTotalAmountChange = (event) => {
    setTotalAmount(event.target.value);
  };

  const handleBillingDetailsChange = (event) => {
    setBillingDetails({
      ...billingDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleApplePayClick = async () => {
    if (!stripe) {
      console.error('Stripe.js has not loaded.');
      return;
    }

    // Create a payment method
    const { paymentMethod, error: paymentError } = await stripe.createPaymentMethod({
      type: 'card',
      billing_details: {
        name: billingDetails.name,
        address: {
          line1: billingDetails.address,
          city: billingDetails.city,
          state: billingDetails.state,
          postal_code: billingDetails.postalCode,
          country: billingDetails.country,
        },
      },
    });

    if (paymentError) {
      console.error('Error:', paymentError.message);
      return;
    }

    // Send the totalAmount, paymentMethod, and any additional information to your server for further processing
    // Example: call a function to make a POST request to your server
    processPayment(totalAmount, paymentMethod);
  };

  const processPayment = async (totalAmount, paymentMethod) => {
    // TODO: Make a POST request to your server with the necessary data (totalAmount, paymentMethod)
    // You can use a library like Axios or Fetch to make the request

    console.log('Total Amount:', totalAmount);
    console.log('Payment Method:', paymentMethod);
  };

  return (
    <form className='stack' onSubmit={handleSubmit}>
      <label>
        Total Amount:
        <input type="number" value={totalAmount} onChange={handleTotalAmountChange} />
      </label>
      <label>
        Name:
        <input type="text" name="name" value={billingDetails.name} onChange={handleBillingDetailsChange} />
      </label>
      <label>
        Address:
        <input type="text" name="address" value={billingDetails.address} onChange={handleBillingDetailsChange} />
      </label>
      <label>
        City:
        <input type="text" name="city" value={billingDetails.city} onChange={handleBillingDetailsChange} />
      </label>
      <label>
        State:
        <input type="text" name="state" value={billingDetails.state} onChange={handleBillingDetailsChange} />
      </label>
      <label>
        Postal Code:
        <input type="text" name="postalCode" value={billingDetails.postalCode} onChange={handleBillingDetailsChange} />
      </label>
      <label>
        Country:
        <input type="text" name="country" value={billingDetails.country} onChange={handleBillingDetailsChange} />
      </label>
      <label>
        Card Details:
        <CardElement />
      </label>
      <button type="submit">Pay</button>
      {stripe && canMakePayment && (
        <PaymentRequestButtonElement
          options={{
            paymentRequest: stripe.paymentRequest({
              country: 'US',
              currency: 'usd',
              total: {
                label: 'Total Amount',
                amount: totalAmount * 100,
              },
              requestPayerName: true,
              requestPayerEmail: true,
              requestShipping: false,
            }),
          }}
          onClick={handleApplePayClick}
        />
      )}
      {stripe && !canMakePayment && (
        <div>Apple Pay is not supported on this device</div>
      )}
    </form>
  );
};

const PaymentIntegration = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default PaymentIntegration;
