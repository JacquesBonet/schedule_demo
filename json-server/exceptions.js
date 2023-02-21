
module.exports = (req, res, next) => {
  if (req.body) {
    if (req.body.name === 'error') {
      throw new Error('bad request');
    }
  }
  next();
};
