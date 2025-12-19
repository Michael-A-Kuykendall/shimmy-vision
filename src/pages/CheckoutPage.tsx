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
    <div className="min-h-screen bg-background flex flex-col lg:flex-row">
      {/* Left Panel: Marketing & Value Prop */}
      <div className="w-full lg:w-1/2 bg-muted/30 p-8 lg:p-16 flex flex-col justify-center border-r border-border relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary opacity-50"></div>
        
        <div className="max-w-lg mx-auto w-full z-10">
          <a href="/" className="group flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-12 transition-colors">
            <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Pricing
          </a>

          <div className="mb-8">
            <h1 className="text-4xl lg:text-5xl font-display text-foreground mb-4 tracking-tight">{content.title}</h1>
            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-bold text-primary">{content.price}</span>
              {content.price !== 'Custom' && <span className="text-muted-foreground ml-2">USD</span>}
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">{content.description}</p>
          </div>
          
          <div className="mb-10">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">What's included</h3>
            <ul className="space-y-4">
              {content.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-4">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-foreground/80 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonial */}
          {content.testimonial && (
            <div className="bg-background rounded-xl p-6 border border-border shadow-sm mb-8">
              <div className="flex text-primary mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground italic mb-3">"{content.testimonial.quote}"</p>
              <p className="text-sm font-bold text-foreground">— {content.testimonial.author}</p>
            </div>
          )}

          <div className="flex items-center text-xs text-muted-foreground">
            <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Secure 256-bit SSL Encrypted Payment
          </div>
        </div>
      </div>

      {/* Right Panel: Stripe Embedded Checkout */}
      <div className="w-full lg:w-1/2 bg-background p-4 lg:p-8 flex flex-col justify-center items-center relative">
        {/* Logo at top of right pane */}
        <div className="mb-8">
          <img src="/shimmy-vision/assets/shimmy-logo.png" alt="Shimmy Vision" className="h-12 w-auto" onError={(e) => {
            // Fallback if image fails (e.g. path issue)
            e.currentTarget.style.display = 'none';
          }} />
        </div>

        <div className="w-full max-w-xl mx-auto bg-card rounded-2xl shadow-2xl border border-border overflow-hidden min-h-[600px]">
          {error ? (
            <div className="p-12 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Connection Error</h3>
              <p className="text-gray-500 mb-6">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : clientSecret ? (
            <EmbeddedCheckoutProvider
              stripe={stripePromise}
              options={{ clientSecret }}
            >
              <EmbeddedCheckout className="h-full w-full" />
            </EmbeddedCheckoutProvider>
          ) : (
            <div className="flex items-center justify-center h-[600px]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          )}
        </div>
        
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Powered by <span className="font-bold text-foreground">Stripe</span>. 
          <br className="sm:hidden" /> 
          <span className="hidden sm:inline"> • </span> 
          Money-back guarantee for 30 days.
        </p>
      </div>
    </div>
  );
};

export default CheckoutPage;
