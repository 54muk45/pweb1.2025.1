const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    const frase = response.data[0];
    res.render('index', { frase });
  } catch (error) {
    console.error(error);
    res.render('index', { frase: 'Não foi possível carregar a frase. Tente novamente mais tarde.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
