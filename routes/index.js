const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();

const basename = path.basename(__filename);
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    require(path.join(__dirname, file))(router);
  });

router.get("/", (req, res) =>
  res.status(200).send({
    message: "Welcome to the API!",
  })
);

module.exports = router;
