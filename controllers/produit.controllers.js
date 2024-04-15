const { getProduits, createProduit } = require("../queries/produit.queries");

exports.produitsListe = async (req, res, next) => {
  try {
    const produits = await getProduits();
    res.send(produits);
  } catch (error) {
    next(error);
  }
};

exports.produitCreate = async (req, res, next) => {
  try {
    const body = req.body;
    const data = await createProduit(body);
    res.send(data);
  } catch (error) {
    next(error);
  }
};
