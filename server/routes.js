<<<<<<< HEAD
const models = require('./controller/products');
const modelsQuestions = require('./controller/questions');
=======
const products = require('./controller/products');
const reviews = require('./controller/reviews');
>>>>>>> main

module.exports.getProducts = (req, res) => {
  models.getProducts((result) => {
    res.status(200).json(result.data);
  });
};

module.exports.getProductInfo = (req, res) => {
  const { id } = req.params;
  models.getProductInfo(id, (result) => {
    res.status(200).json(result.data);
  });
};

module.exports.getProductStyles = (req, res) => {
  const { id } = req.params;
  models.getProductStyles(id, (result) => {
    res.status(200).json(result.data);
  });
};

module.exports.getRelatedProduct = (req, res) => {
  const { id } = req.params;
  models.getRelatedProduct(id, (result) => {
    res.status(200).json(result.data);
  });
};

module.exports.getQuestions = (req, res) => {
  const id = req.query.product_id;
  modelsQuestions.getQuestions(id, (result) => {
    res.status(200).json(result.data);
  });
};

module.exports.getAnswers = (req, res) => {
  const { qid } = req.params;
  modelsQuestions.getAnswers(qid, (result) => {
    res.status(200).json(result.data);
  });
};

module.exports.getReviews = (req, res) => {
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
};

module.exports.getReviewMeta = (req, res) => {
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
};
