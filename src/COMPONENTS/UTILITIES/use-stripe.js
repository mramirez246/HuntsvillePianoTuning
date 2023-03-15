import { createContext, useContext, useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { errorToString } from "./errorToString";

const {
  REACT_APP_STRIPE_PUBLIC_KEY = "pk_test_51MajXbKx2glJRMlwXbLVRs6jolz58bvODFBxDGs3QycWHealravrW7E9mszvrw4N85DviRctPEEwGtnFTmlQCTTs00aR6DMzzS",
} = process.env;

const asyncLoadStripe = async () =>
  REACT_APP_STRIPE_PUBLIC_KEY
    ? await loadStripe(REACT_APP_STRIPE_PUBLIC_KEY)
    : null;

const asyncRedirect = async ({ stripe, sessionId }) => {
  try {
    await stripe.redirectToCheckout({ sessionId });
  } catch (error) {
    return { error: errorToString(error, "Unknown checkout redirect error.") };
  }
};

const StripeContext = createContext(null);
export const StripeProvider = StripeContext.Provider;

// use this hook, if you need Stripe API
// and you want to easily mock it's functions (e.g. in storybook / tests)
export const useStripe = () => {
  const value = useContext(StripeContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [stripeObj, setStripeObj] = useState(value);

  useEffect(() => {
    if (stripeObj) return;

    setLoading(true);
    asyncLoadStripe().then((strpObj) => {
      setLoading(false);
      setError(strpObj ? undefined : "Stripe object loading failed");
      setStripeObj(strpObj);
    });
  }, [stripeObj]);

  const asyncStripeRedirect = async ({ sessionId }) => {
    if (stripeObj) {
      setLoading(true);

      const redirectRes = await asyncRedirect({ stripe: stripeObj, sessionId });

      setLoading(false);
      setError(redirectRes?.error);
    } else setError("Invalid Stripe Object");
  };

  return [loading, error, asyncStripeRedirect];
};
