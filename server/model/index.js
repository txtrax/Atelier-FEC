require('dotenv').config();
const axios = require('axios');

const options = {
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/',
  headers: {
    Authorization: process.env.TOKEN,
  },
};

module.exports.getProducts = (cb) => {
  axios.get(`${options.url}products`, { headers: options.headers })
    .then((result) => {
      cb(result);
    })
    .catch((err) => {
      console.log('Error when getting products: ', err);
    });
};

module.exports.getProductInfo = (id, cb) => {
  axios.get(`${options.url}products/${id}`, { headers: options.headers })
    .then((result) => {
      cb(result);
    })
    .catch((err) => {
      console.log('Error when getting one product info: ', err);
    });
};

module.exports.getProductStyles = (id, cb) => {
  axios.get(`${options.url}products/${id}/styles`, { headers: options.headers })
    .then((result) => {
      cb(result);
    })
    .catch((err) => {
      console.log('Error when getting one product styles: ', err);
    });
};

module.exports.getRelatedProduct = (id, cb) => {
  axios.get(`${options.url}products/${id}/related`, { headers: options.headers })
    .then((result) => {
      cb(result);
    })
    .catch((err) => {
      console.log('Error when getting related products: ', err);
    });
};
