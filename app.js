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
app.get('/guides', (req, res) => {
  res.render('guides/index');
});
app.get('/guides/:guide', (req, res) => {
  res.render(`guides/${req.params.guide}/index`);
});
app.get('/50shadesofspacegray', (req, res) => {res.redirect('https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313.TR11.TRC1.A0.H0.Xspace+gray+iphone+6s.TRS0&_nkw=space+gray+iphone+6s&_sacat=0');});
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
