import { CURRENT_PRICE_USD } from '../constants';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

export const trackInitiateCheckout = (buttonLocation: string): void => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'InitiateCheckout', {
      value: CURRENT_PRICE_USD,
      currency: 'USD',
      content_name: '365 Días de Color + 3 Bonos',
      content_ids: ['365-dias-de-color'],
      content_type: 'product',
      num_items: 1,
      button_location: buttonLocation,
    });
  }
};
