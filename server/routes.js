const products = require('./controller/products');

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
