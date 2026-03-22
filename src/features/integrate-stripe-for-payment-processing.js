// Integrate Stripe for payment processing using Node.js and Express
const express = require('express');
const app = express();
const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY');

app.post('/charge', (req, res) => {
  const { amount, currency, source } = req.body;
  stripe.charges.create({
    amount,
    currency,
    source,
  }, (err, charge) => {
    if (err) {
      res.status(500).send({ message: 'Error charging card' });
    } else {
      res.send({ message: 'Charge successful', charge });
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});