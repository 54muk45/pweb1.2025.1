const express = require('express');
const app = express();
const PORT = 3000;

// Middleware de aplicação - log de acesso
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Rota raiz
app.get('/', (req, res) => {
  res.send('<h1>Rota: /</h1>');
});

// /about
app.get('/about', (req, res) => {
  res.send('<h1>Rota: /about</h1>');
});

// /data (POST)
app.post('/data', (req, res) => {
  res.send('<h1>Rota: /data (POST)</h1>');
});

// /users
app.get('/users', (req, res) => {
  res.send('<h1>Rota: /users</h1>');
});

// /users/signup
app.get('/users/signup', (req, res) => {
  res.send('<h1>Rota: /users/signup</h1>');
});

// /users/signin
app.get('/users/signin', (req, res) => {
  // Redireciona se não houver userid
  res.redirect('/users/signup');
});

// /users/:userid
app.get('/users/:userid', (req, res) => {
  const { userid } = req.params;

  if (userid === 'signin') {
    res.redirect('/users/signup');
  } else if (userid === 'signup') {
    res.send('<h1>Rota: /users/signup</h1>');
  } else {
    res.send(`<h1>Bem-vindo, usuário ${userid}!</h1>`);
  }
});

// 404 - rota não encontrada
app.use((req, res) => {
  res.status(404).send('<h1>Erro 404 - Página não encontrada</h1><a href="/">Voltar à página inicial</a>');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
