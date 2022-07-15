require('dotenv').config();
const axios = require('axios');

const options = {
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/',
  headers: {
    Authorization: process.env.TOKEN,
  },
};

module.exports = {
  getReviews: (cb, page, count, sort, id) => {
    console.log('IN CONTROLLER, id = ', id);
    console.log('IN CONTROLLER, sort = ', sort);
    console.log('IN CONTROLLER, page = ', page);
    console.log('IN CONTROLLER, count = ', count);
    axios.get(options.url, {
      headers: options.headers,
      params: {
        page,
        count,
        sort,
        product_id: id,
      },
    })
      .then((res) => {
        console.log('IN CONTROLLER, getReviews SUCCESS!!!');
        cb(null, res);
      })
      .catch((err) => {
        console.log('IN CONTROLLER, getReviews FAILED err = ', err);
        cb(err);
      });
  },
  getReviewMeta: (id, cb) => {
    console.log('IN CONTROLLER, id = ', id);
    axios.get(`${options.url}meta`, {
      headers: options.headers,
      params: {
        product_id: id,
      },
    })
      .then((res) => {
        console.log('IN CONTROLLER, getReviews SUCCESS!!!');
        cb(null, res);
      })
      .catch((err) => {
        console.log('IN CONTROLLER, getReviews FAILED err = ', err);
        cb(err);
      });
  },
};
