const PUBLIC_STRIPE_API_KEY = import.meta.env.PUBLIC_STRIPE_KEY
const PRIVATE_STRIPE_API_KEY = import.meta.env.PRIVATE_STRIPE_KEY

// Found under "Product Catalog".
const PLUGIN_1_PRICE_ID = import.meta.env.PLUGIN_1_PRICE_ID

if (!PUBLIC_STRIPE_API_KEY) {
  throw new Error('PUBLIC Stripe API Key missing!')
}

if (!PRIVATE_STRIPE_API_KEY) {
  throw new Error('PRIVATE Stripe API Key missing!')
}

if (!PLUGIN_1_PRICE_ID) {
  throw new Error('PLUGIN_1 Price ID missing!')
}

export { PUBLIC_STRIPE_API_KEY, PRIVATE_STRIPE_API_KEY, PLUGIN_1_PRICE_ID }
