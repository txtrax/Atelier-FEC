// see .env for environment config variable
require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();
// Set up static service of assets

app.use(express.static(path.join(__dirname, '../client/dist')));


// Add app-wide middleware

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
