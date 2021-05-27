const Ceps = require('../model/Ceps')

const serviceCeps = require('../services/Ceps')

const getAllCeps = async (_req, res) => {
  try{
    const ceps = await Ceps.getAll();
    res.status(200).json(ceps);
  } catch (err) {
    res.status(400).json(err);
  }
}

const verifyCep = (req, res, next) => {
  const cep = req.params.id

  if(!serviceCeps.verifyCep(cep)) {
    return res.status(400).json({})
  }

  next()
}

module.exports = {
  getAllCeps,
  verifyCep,
}