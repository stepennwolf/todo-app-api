/**
 * Inject initialized DB models into the req object
 * @param models - sequelize.models
 * @returns {(function(*, *, *): void)|*}
 */
module.exports = (models) => (req, res, next) => {
  req.$models = models;
  next();
}
