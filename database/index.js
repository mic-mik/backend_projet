const mongoose = require("mongoose");

mongoose
  .connect("mongodb://admin:admin@127.0.0.1:27017/projet443")
  .then(() => console.log("Connexion DB établie !"))
  .catch((e) => console.log(e));
