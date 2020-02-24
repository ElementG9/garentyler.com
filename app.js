/* - Configuration - */
// Create the app.
const app = require('express')();
// Import dependencies.
const helmet = require('helmet');
const compression = require('compression');
const fs = require('fs');
// Configure dependencies.
app.use(helmet());
app.use(compression());
app.set('json spaces', 2);
app.set('view engine', 'pug');
app.set('views', `${__dirname}/views/`);

function renderItem(req, res, obj) {
  let fullPath = `${__dirname}/views${req.originalUrl}`;
  if (fs.existsSync(fullPath)) {
    if (fs.statSync(fullPath).isDirectory()) {
      let items = fs.readdirSync(fullPath);
      if (typeof obj.filter != 'undefined') {
        items = items.map(i => {
          if (obj.filter(`${fullPath}/${i}`))
            return i;
          else return null;
        }).filter(i => i != null);
      }
      if (typeof obj.blacklist != 'undefined')
        if (obj.blacklist.length > 0)
          items = items.filter(i => obj.blacklist.indexOf(i) < 0); // If not found in blacklist
      res.render('dirview', {
        breadcrumbs: obj.breadcrumbs,
        url: req.originalUrl,
        itemsLabel: obj.itemsLabel,
        items
      });
    } else if (path.extname(fullPath) == '.pug') {
      res.render(fullPath.slice(0, fullPath.length - 4), obj);
    } else {
      res.sendFile(fullPath);
    }
  } else {
    res.status(404).render('404');
  }
}
function genBreadcrumbs(req, res) {
  let breadcrumbs = [];
  let params = require('url').parse(req.originalUrl).pathname.split('/').filter(p => p.trim().length > 0);
  for (let i = 0; i < params.length; i++) {
    let obj = {
      text: `${params[i][0].toUpperCase()}${params[i].slice(1)}` // Capitalize the first letter.
    };
    if (i == 0)
      obj.url = `/${params[i]}`;
    else
      obj.url = `${breadcrumbs[i-1].url}/${params[i]}`;
    breadcrumbs.push(obj);
  }
  console.log(breadcrumbs);
  return breadcrumbs;
}

/* - Routes - */
app.get('/', (req, res) => {
  res.status(200);
  res.render('index');
});
// Serve the guides.
app.get('/guides', (req, res) => {
  res.status(200);
  res.render('guides/index');
});
app.get('/guides/:guide', (req, res) => {
  if (fs.existsSync(`${__dirname}/views/guides/${req.params.guide}/index.pug`))
    res.render(`guides/${req.params.guide}/index`);
  else
    res.status(404).render('404');
});

// Joke paths
app.get('/50shadesofspacegray', (req, res) => {res.redirect('https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313.TR11.TRC1.A0.H0.Xspace+gray+iphone+6s.TRS0&_nkw=space+gray+iphone+6s&_sacat=0');});
app.get('/millenialsgetoffendedeasily', (req, res) => res.send('ok boomer'));
app.get('/loss', (req, res) => res.send('|\n||\n||\n|_'));

// Serve static files.
app.get('/favicon.ico', (req, res) => {
  res.sendFile(`${__dirname}/public/favicon.ico`);
});
app.get('/img/:file', (req, res) => {
  res.sendFile(`${__dirname}/public/images/${req.params.file}`);
});
app.get('/css/:file', (req, res) => {
  res.status(200);
  res.sendFile(`${__dirname}/public/css/${req.params.file}`);
});
// Error pages.
app.use((req, res) => { // 404 Error
  res.status(400);
  res.render('404');
});
app.use((error, req, res, next) => { // 500 Error
  console.error(error);
  res.status(500);
  res.render('500', {
    title: '500: Internal Server Error',
    error: error
  });
});
/* - Listening - */
app.listen(3000, () => {
  console.log('Server listening on port 3000.');
});
