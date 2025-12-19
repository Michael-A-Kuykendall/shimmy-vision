import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { TIER_CONTENT } from '../config/tiers';
import { stripePromise } from '../lib/stripe';

const CheckoutPage = () => {
  const { tier } = useParams();
  const [clientSecret, setClientSecret] = useState('');
  const [error, setError] = useState('');

  const content = TIER_CONTENT[tier as keyof typeof TIER_CONTENT];

  useEffect(() => {
    if (!tier || !content) {
      setError('Invalid tier selected.');
      return;
    }

    // Fetch the clientSecret from the Worker
    fetch(`https://shimmy-license-webhook-test.michaelallenkuykendall.workers.dev/buy?tier=${tier}&embedded=true`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          setError('Failed to initialize checkout. Please try again.');
          console.error('Missing clientSecret', data);
        }
      })
      .catch((err) => {
        setError('Network error. Please check your connection.');
        console.error('Checkout fetch error:', err);
      });
  }, [tier, content]);

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Invalid Tier</h1>
          <p className="mt-2 text-gray-600">The requested plan does not exist.</p>
          <a href="/" className="mt-4 inline-block text-blue-600 hover:underline">Return Home</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Left Panel: The "Closer" */}
      <div className="w-full lg:w-1/2 bg-white p-8 lg:p-16 flex flex-col justify-center border-r border-gray-200">
        <div className="max-w-lg mx-auto">
          <a href="/" className="text-sm text-gray-500 hover:text-gray-900 mb-8 inline-block">
            ← Back to Pricing
          </a>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{content.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{content.description}</p>
          
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-blue-900 mb-4">What's included:</h3>
            <ul className="space-y-3">
              {content.features.map((feature, index) => (
                <li key={index} className="flex items-center text-blue-800">
                  <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-gray-500 italic border-l-4 border-blue-500 pl-4">
            "{content.closer}"
          </p>
        </div>
      </div>

      {/* Right Panel: Stripe Embedded Checkout */}
      <div className="w-full lg:w-1/2 bg-gray-50 p-4 lg:p-8 flex flex-col justify-center">
        <div className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden min-h-[600px]">
          {error ? (
            <div className="p-8 text-center text-red-600">
              <p>{error}</p>
              <button onClick={() => window.location.reload()} className="mt-4 text-blue-600 underline">Retry</button>
            </div>
          ) : clientSecret ? (
            <EmbeddedCheckoutProvider
              stripe={stripePromise}
              options={{ clientSecret }}
            >
              <EmbeddedCheckout className="h-full w-full" />
            </EmbeddedCheckoutProvider>
          ) : (
            <div className="flex items-center justify-center h-full min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
