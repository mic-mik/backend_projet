const Produit = require("../database/models/produit.model");

exports.getProduits = () => {
  return Produit.find().sort({ _id: -1 });
};

exports.createProduit = (unProduit) => {
  const produit = new Produit(unProduit);
  console.log(produit);
  return produit.save();
};
