const {
  listeProduits,
  ajouterUnProduit,
} = require("../controllers/produits.controller");
const Produit = require("../database/models/produits.model");

const router = require("express").Router();

router.get("/", listeProduits);
router.post("/", ajouterUnProduit);

module.exports = router;
