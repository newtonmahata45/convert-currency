const express = require("express");
const router = express.Router();
const { exchangeCurrency,convert } = require("./controller")



router.get("/currency-exchange", exchangeCurrency);
router.get("/convert", convert);

module.exports = router;
