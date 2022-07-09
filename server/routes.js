const models = require('./model/index');

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
