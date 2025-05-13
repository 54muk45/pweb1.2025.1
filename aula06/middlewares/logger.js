module.exports = (req, res, next) => {
    console.log(`Acesso: ${req.method} ${req.url}`);
    next();
  };
  