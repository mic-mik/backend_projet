const Produit = require("../database/models/produits.model");

exports.getProduits = () => {
  return Produit.find().exec();
};

exports.postProduit = (produit) => {
  const newProduit = new Produit(produit);
  return newProduit.save();
};
