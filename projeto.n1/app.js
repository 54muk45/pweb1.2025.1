
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index');
const curiosidadesRouter = require('./routes/curiosidades');
const tituloRouter = require('./routes/titulo');
const nadaRouter = require('./routes/nada');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/curiosidades', curiosidadesRouter);
app.use('/titulo', tituloRouter);
app.use('/nada', nadaRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
