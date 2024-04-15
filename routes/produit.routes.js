const {
  produitsListe,
  produitCreate,
} = require("../controllers/produit.controllers");

const router = require("express").Router();

router.get("/", produitsListe);

router.post("/", produitCreate);

module.exports = router;
