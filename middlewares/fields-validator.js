const { response } = require("express");
const { validationResult } = require("express-validator");

const fieldsValidator = (req, res = response, next) => {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({
      ok: false,
      erros: erros.mapped(),
    });
  }

  next()
};


module.exports={
    fieldsValidator
}