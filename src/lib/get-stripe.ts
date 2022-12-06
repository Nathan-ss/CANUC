import { loadStripe, Stripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null> | null = null;

const getStripe = () => {
  const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  if (key) {
    if (!stripePromise) {
      stripePromise = loadStripe(key);
    }
  }
  return stripePromise;
};

export default getStripe;
