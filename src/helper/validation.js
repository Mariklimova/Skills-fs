function isValidId(req, res, next) {
  const { id } = req.params;
  if (typeof id != 'number' && typeof id != 'string') throw new Error('error data typeof');
  if (isNaN(id)) throw new Error('error');
  next();
}

module.exports = { isValidId };
