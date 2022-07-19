const axios = require('axios');

module.exports = {
  getAllReviews: (productId, sort) => axios.get('/reviews', {
    // axios.get('http://localhost:7777/reviews', {
    params: {
      product_id: productId,
      sort,
    },
  })
    .then((res) => res.data.results),

  getReviewMeta: (productId) => axios.get('reviews/meta', {
    params: {
      product_id: productId,
    },
  })
    .then((res) => res.data.characteristics),

  markReviewHelpful: (id) => {
    console.log('IN SERVICE, helpful, id = ', id);
    axios.put(`reviews/${id}/helpful`)
      .then(() => {
        console.log('markHelpful SUCCESS!!!');
      })
      .catch((err) => {
        console.log('markHelpful FAILED err = ', err);
        console.log(err);
      });
  },

  reportReview: (id) => {
    console.log('IN SERVICE, report, id = ', id);
    axios.put(`reviews/${id}/report`)
      .then(() => {
        console.log('reportReview SUCCESS!!!');
      })
      .catch((err) => {
        console.log('reportReview FAILED err = ', err);
        console.log(err);
      });
  },
};
