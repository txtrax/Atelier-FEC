// see .env for environment config variable
require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();
// Set up static service of assets

const route = require("./routes.js");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.use(express.static(path.join(__dirname, '../client/dist')));


// Add app-wide middleware

const PORT = process.env.PORT || 3000;


app.get('/products', route.getProducts);
app.get('/products/:id', route.getProductInfo);
app.get('/products/:id/styles', route.getProductStyles);
app.get('/products/:id/related', route.getRelatedProduct);


app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
