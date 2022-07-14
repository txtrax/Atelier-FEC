const models = require('./controller/products');
const modelsQuestions = require('./controller/questions');

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
