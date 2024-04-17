const { getProduits, postProduit } = require("../queries/produits.queries");

exports.listeProduits = async (req, res, next) => {
  try {
    const data = await getProduits();
    res.send(data);
  } catch (error) {
    next(error);
  }
};

exports.ajouterUnProduit = async (req, res, next) => {
  try {
    const body = req.body;
    const data = await postProduit(body);
    res.send(data);
  } catch (error) {
    next(error);
  }
};
