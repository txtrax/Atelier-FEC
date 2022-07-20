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
    // console.log('IN CONTROLLER, id = ', id);
    // console.log('IN CONTROLLER, sort = ', sort);
    // console.log('IN CONTROLLER, page = ', page);
    // console.log('IN CONTROLLER, count = ', count);
    console.log('IN CONTROLLER GET ALL REVIEW');
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
    console.log('IN CONTROLLER GET REVIEW META');
    axios.get(`${options.url}meta`, {
      headers: options.headers,
      params: {
        product_id: id,
      },
    })
      .then((res) => {
        console.log('IN CONTROLLER, getReviewMeta SUCCESS!!!');
        cb(null, res);
      })
      .catch((err) => {
        console.log('IN CONTROLLER, getReviewMeta FAILED err = ', err);
        cb(err);
      });
  },

  markReviewHelpful: (id, cb) => {
    console.log('IN CONTROLLER markReviewHelpful');
    axios.put(`${options.url}${id}/helpful`, {}, {
      headers: options.headers,
    })
      .then(() => {
        console.log('IN CONTROLLER, getReviewMeta SUCCESS!!!');
        cb(null);
      })
      .catch((err) => {
        console.log('IN CONTROLLER, getReviewMeta FAILED err = ', err);
        cb(err);
      });
  },

  reportReview: (id, cb) => {
    console.log('IN CONTROLLER reportReview');
    axios.put(`${options.url}${id}/report`, {}, {
      headers: options.headers,
    })
      .then(() => {
        console.log('IN CONTROLLER, reportReview SUCCESS!!!');
        cb(null);
      })
      .catch((err) => {
        console.log('IN CONTROLLER, reportReview FAILED err = ', err);
        cb(err);
      });
  },
};
