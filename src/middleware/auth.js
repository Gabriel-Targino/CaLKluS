function isAuthenticated(req, res, next) {
  if (req.session.userId) {
    next(res.json("OK! Pode Acessar"));
     
  }
  else{
    res.json("Algo deu errado");
  }
}

module.exports = { isAuthenticated };
