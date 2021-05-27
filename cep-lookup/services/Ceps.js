const validateCep = (cep) => {
  const cepFormat = new RegExp(/\d{5}-?\d{3}/gm)
  return cepFormat.test(cep)
}

module.exports = {
  validateCep,
}



