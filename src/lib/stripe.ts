import { loadStripe } from '@stripe/stripe-js';

// Stripe TEST mode publishable key (safe for client-side)
// Pattern for TEST: pk_test_51RwqRv1g5xy1QMw5...
const STRIPE_PUBLISHABLE_KEY = 'pk_test_51RwqRv1g5xy1QMw5KbL9F0zJ0yZ8X0X0X0X0X0X0X0X0X0X0X0X0X0X0X0X0X0X0X0X0X0X0X0X0X0X0X0X0X0X0X0X0X';

export const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

// Worker base URL
const WORKER_URL = 'https://shimmy-license-webhook-test.michaelallenkuykendall.workers.dev';

// Tier to Stripe price ID mapping (from wrangler.toml env.test.vars)
export const TIER_PRICES = {
  developer: 'price_1SefDP1g5xy1QMw5KEMHrYdM',
  professional: 'price_1SefFO1g5xy1QMw5N9mUtbCN',
  startup: 'price_1SefGQ1g5xy1QMw5V6KEJLbb',
  enterprise: 'price_1SefH71g5xy1QMw5UHfLM0Zm',
  lifetime: 'price_1SefIz1g5xy1QMw5XKDnFf4Q',
} as const;

export type TierName = keyof typeof TIER_PRICES;

/**
 * Create a Stripe Checkout Session for embedded checkout
 * Returns the client_secret needed to render EmbeddedCheckout
 */
export async function createCheckoutSession(tier: TierName): Promise<string> {
  const response = await fetch(`${WORKER_URL}/create-checkout-session`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      tier,
      mode: 'embedded',
      success_url: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${window.location.origin}/`,
    }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Network error' }));
    throw new Error(error.error || 'Failed to create checkout session');
  }

  const { clientSecret } = await response.json();
  return clientSecret;
}

/**
 * Fetch session status after payment completion
 */
export async function fetchSessionStatus(sessionId: string) {
  const response = await fetch(`${WORKER_URL}/session-status?session_id=${sessionId}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch session status');
  }
  
  return response.json();
}
