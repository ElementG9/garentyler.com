/* - Configuration - */
// Create the app.
const app = require('express')();
// Import dependencies.
const helmet = require('helmet');
const compression = require('compression');
// Configure dependencies.
app.use(helmet());
app.use(compression());
app.set('json spaces', 2);
app.set('view engine', 'pug');
app.set('views', `${__dirname}/views/`);

/* - Routes - */
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/pivot', (req, res) => {
  res.render('pivot/index');
});
// Serve static files.
app.get('/favicon.ico', (req, res) => {
  res.sendFile(`${__dirname}/public/favicon.ico`);
});
app.get('/img/:file', (req, res) => {
  res.sendFile(`${__dirname}/public/images/${req.params.file}`);
});
app.get('/css/:file', (req, res) => {
  res.sendFile(`${__dirname}/public/css/${req.params.file}`);
});

/* - Listening - */
app.listen(3000, () => {
  console.log('Server listening on port 3000.');
});
