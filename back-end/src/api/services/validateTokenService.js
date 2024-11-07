const validateToken = require('../middlewares/validateToken');

const validate = async (req, res) => {
  const result = !!validateToken(req, res, () => {});

  return { valid: result };
};

module.exports = {
  validate,
};
