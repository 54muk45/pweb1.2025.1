const express = require('express');
const app = express();
const port = 3000;

// Middleware de log de acesso
app.use((req, res, next) => {
  console.log(`Acesso: ${req.method} ${req.url}`);
  next();
});

// Middleware das rotas
const showPage = (pageName) => (req, res) => {
  res.send(`<h1>bem vindo:}</h1>`);
};

// Rota principal
app.get('/', showPage('/'));
app.set('view engine', 'ejs');
app.set('views', './views');



// Rotas simples
app.get('/about', showPage('/about'));
app.get('/users/signin', showPage('/users/signin'));
app.get('/users/signup', showPage('/users/signup'));

// Rota POST para /data
app.get('/data', (req, res) => {
  res.send('<h1>bem vindo: /data (POST)</h1>');
});

// Rota GET para /data (só para diferenciar o erro de método)
app.post('/data', (req, res) => {
  res.send('<h1>Use o método POST para acessar o /data</h1>');
});

// /users/:userid dentro de /signin
app.get('/users/:userid', (req, res) => {
  const { userid } = req.params;

  if (!userid || userid === 'signin' || userid === 'signup') {
    // Redireciona para signup se o ID estiver ausente ou for uma rota inválida
    res.redirect('/users/signup');
  } else {
    res.send(`<h1>Bem-vindo, ${userid}!</h1>`);
  }
});

// Rota 404 (deve ficar por último!)
app.use((req, res) => {
  res.status(404).send(`
    <h1>404 - Página não existente/h1>
    <p><a href="/">Voltar para o Início</a></p>
  `);
});

// Inicialização do servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
