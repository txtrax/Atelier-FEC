const axios = require('axios');

module.exports = {
  getAllReviews: (productId, sort) => axios.get('/reviews', {
    // axios.get('http://localhost:7777/reviews', {
    params: {
      product_id: productId,
      sort,
      count: 20,
    },
  })
    // eslint-disable-next-line arrow-body-style
    .then((res) => {
      // console.log('getAllReviews = ', res);
      return res.data.results;
    }),

  getReviewMeta: (productId) => axios.get('reviews/meta', {
    params: {
      product_id: productId,
    },
  })
    .then((res) => res.data.characteristics),

  markReviewHelpful: (id) => axios.put(`reviews/${id}/helpful`),

  reportReview: (id) => {
    // console.log('IN SERVICE, report, id = ', id);
    axios.put(`reviews/${id}/report`)
      .then(() => {
        // console.log('reportReview SUCCESS!!!');
      })
      .catch((err) => {
        console.log('reportReview FAILED err = ', err);
      });
  },

  // eslint-disable-next-line arrow-body-style
  getProductInfo: (id) => {
    return axios.get(`products/${id}`)
      .then((res) => res.data.name);
  },
};
