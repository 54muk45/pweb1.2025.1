exports.showPage = (pageName) => (req, res) => {
  res.send(`<h1>Página: ${pageName}</h1>`);
};

exports.handlePostData = (req, res) => {
  res.send('<h1>Página: /data (POST)</h1>');
};

exports.handleGetData = (req, res) => {
  res.send('<h1>Use método POST para acessar /data</h1>');
};

exports.handleUserId = (req, res) => {
  const { userid } = req.params;

  if (!userid || userid === 'signin' || userid === 'signup') {
    return res.redirect('/users/signup');
  }

  res.send(`<h1>Bem-vindo, ${userid}!</h1>`);
};
