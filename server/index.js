// see .env for environment config variable
require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const route = require('./routes');

const app = express();
// Set up static service of assets

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

app.use(express.static(path.join(__dirname, '../client/dist')));

// Add app-wide middleware

const PORT = process.env.PORT || 3000;

app.get('/products', route.getProducts);
app.get('/products/:id', route.getProductInfo);
app.get('/products/:id/styles', route.getProductStyles);
app.get('/products/:id/related', route.getRelatedProduct);
app.get('/reviews', route.getReviews);
app.get('/reviews/meta', route.getReviewMeta);
app.put('/reviews/:id/helpful', route.markReviewHelpful);
app.put('/reviews/:id/report', route.reportReview);

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
