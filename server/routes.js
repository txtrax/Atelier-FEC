const models = require('./controller/products');
const reviews = require('./controller/reviews');

module.exports = {
  getProducts: (req, res) => {
    console.log('IN ROUTES getProducts');
    models.getProducts((result) => {
      res.status(200).json(result.data);
    });
  },

  getProductInfo: (req, res) => {
    const { id } = req.params;
    console.log('IN ROUTES getProductInfo, ID = ', id);
    models.getProductInfo(id, (result) => {
      res.status(200).json(result.data);
    });
  },

  getProductStyles: (req, res) => {
    const { id } = req.params;
    models.getProductStyles(id, (result) => {
      res.status(200).json(result.data);
    });
  },

  getRelatedProduct: (req, res) => {
    const { id } = req.params;
    models.getRelatedProduct(id, (result) => {
      res.status(200).json(result.data);
    });
  },

  getReviews: (req, res) => {
    const page = req.query.page || 1;
    const count = req.query.count || 5;
    const sort = req.query.sort || 'newest';
    const id = parseInt(req.query.product_id, 10);
    // console.log('IN ROUTES getProductInfo, QUERY = ', req.query);
    // console.log('IN ROUTES getProductInfo, id = ', id);
    reviews.getReviews((err, result) => {
      if (err) {
        console.log('IN ROUTES, getReviews FAILED');
        res.status(500).send();
      }
      console.log('IN ROUTES, getReviews SUCCESS!!!');
      res.status(200).json(result.data);
    }, page, count, sort, id);
  },

  getReviewMeta: (req, res) => {
    const id = req.query.product_id;
    console.log('IN ROUTES getReviewMeta id = ', id);
    reviews.getReviewMeta(id, (err, result) => {
      if (err) {
        console.log('IN ROUTES, getReviewMeta FAILED');
        res.status(500).send();
      }
      console.log('IN ROUTES, getReviewMeta SUCCESS!!!');
      res.status(200).json(result.data);
    });
  },
};
