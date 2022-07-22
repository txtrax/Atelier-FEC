const products = require('./controller/products');
const questions = require('./controller/questions');
const reviews = require('./controller/reviews');

module.exports.getProducts = (req, res) => {
  products.getProducts((result) => {
    res.status(200).json(result.data);
  });
};

module.exports.getProductInfo = (req, res) => {
  const { id } = req.params;
  products.getProductInfo(id, (result) => {
    res.status(200).json(result.data);
  });
};

module.exports.getProductStyles = (req, res) => {
  const { id } = req.params;
  products.getProductStyles(id, (result) => {
    res.status(200).json(result.data);
  });
};

module.exports.getRelatedProduct = (req, res) => {
  const { id } = req.params;
  products.getRelatedProduct(id, (result) => {
    res.status(200).json(result.data);
  });
};

module.exports.getQuestions = (req, res) => {
  const id = req.query.product_id;
  questions.getQuestions(id, (result) => {
    res.status(200).json(result.data);
  });
};

// module.exports.postQuestion = (req, res) => {
//   modelsQuestions.post(req.body);
//   res.status(201);
// };

module.exports.postQuestion = (req, res) => {
  const params = {
    body: req.body.body,
    name: req.body.name,
    email: req.body.email,
    product_id: req.body.product_id,
  };
  questions.postQuestion(params, (result) => {
    res.status(201).json(result.data);
  });
};

module.exports.postAnswer = (req, res) => {
  const { qid } = req.params;
  const body = {
    body: req.body.body,
    name: req.body.name,
    email: req.body.email,
    photo: req.body.photo,
  };
  questions.postAnswer(qid, body, (result) => {
    res.status(201).json(result.data);
  });
};

module.exports.getAnswers = (req, res) => {
  const { qid } = req.params;
  questions.getAnswers(qid, (result) => {
    res.status(200).json(result.data);
  });
};

module.exports.putHelpfulAnswers = (req, res) => {
  const { answerId } = req.params;
  questions.putHelpfulAnswers(answerId, (result) => {
    res.status(201).json(result.data);
  });
};

module.exports.putReportAnswer = (req, res) => {
  const { answerId } = req.params;
  questions.putReportAnswer(answerId, (result) => {
    res.status(201).json(result.data);
  });
};

module.exports.putHelpfulQuestion = (req, res) => {
  const { qid } = req.params;
  questions.putHelpfulQuestion(qid, (result) => {
    res.status(201).json(result.data);
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
    // console.log('IN ROUTES, getReviews SUCCESS!!!');
    res.status(200).json(result.data);
  }, page, count, sort, id);
};

module.exports.getReviewMeta = (req, res) => {
  const id = req.query.product_id;
  reviews.getReviewMeta(id, (err, result) => {
    if (err) {
      console.log('IN ROUTES, getReviewMeta FAILED');
      res.status(500).send();
    }
    // console.log('IN ROUTES, getReviewMeta SUCCESS!!!');
    res.status(200).json(result.data);
  });
};

module.exports.markReviewHelpful = (req, res) => {
  const { id } = req.params;
  reviews.markReviewHelpful(id, (err) => {
    if (err) {
      console.log('IN ROUTES, markReviewHelpful FAILED');
      res.status(500).send();
    }
    // console.log('IN ROUTES, markReviewHelpful SUCCESS!!!');
    res.status(204).send();
  });
};

module.exports.reportReview = (req, res) => {
  const { id } = req.params;
  reviews.reportReview(id, (err) => {
    if (err) {
      console.log('IN ROUTES, reportReview FAILED');
      res.status(500).send();
    }
    // console.log('IN ROUTES, reportReview SUCCESS!!!');
    res.status(204).send();
  });
};

module.exports.postReview = (req, res) => {
  const {
    product_id, rating, summary, body, recommend, name, email, photos, characteristics,
  } = req.body;
  const params = {
    product_id,
    rating,
    summary,
    body,
    recommend,
    name,
    email,
    photos,
    characteristics,
  };
  reviews.postReview(params, (err) => {
    if (err) {
      console.log('IN ROUTES, postReview FAILED');
      res.status(500).send();
    }
    // console.log('IN ROUTES, postReview SUCCESS!!!');
    res.status(201).send();
  });
};
