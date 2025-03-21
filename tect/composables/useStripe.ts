import { loadStripe } from '@stripe/stripe-js';
import { useRuntimeConfig } from '#app';

let stripePromise : any;

const getStripe = async () => {
  if (!stripePromise) {
    const config = useRuntimeConfig();
    stripePromise = await loadStripe(config.public.stripePublicKey as string);
  }
  return stripePromise;
};

export default function useStripe() {
  return {
    getStripe,
  };
}