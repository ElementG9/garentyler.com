/* - Configuration - */
// Create the app.
const app = require("express")();
// Import dependencies.
const helmet = require("helmet");
const compression = require("compression");
const fs = require("fs");
// Configure dependencies.
app.use(helmet());
app.use(compression());
app.set("json spaces", 2);
app.set("view engine", "pug");
app.set("views", `${__dirname}/views/`);

/* - Routes - */
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/files", (req, res) => {
  let path = "/public/static";
  fs.readdir(`${__dirname}${path}`, function(err, files) {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    res.render("files", {
      directory: path,
      files: files
    });
  });
});
app.get("/files/:filename", (req, res) => {
  res.sendFile(`${__dirname}/public/static/${req.params.filename}`);
});
// Projects.
app.get("/projects", (req, res) => {
  res.render("projects/index");
});
// Guides.
app.get("/guides", (req, res) => {
  res.render("guides/index");
});
app.get("/guides/:guide", (req, res) => {
  if (fs.existsSync(`${__dirname}/views/guides/${req.params.guide}/index.pug`))
    res.render(`guides/${req.params.guide}/index`);
  else res.status(404).render("404");
});

// Joke paths
app.get("/50shadesofspacegray", (req, res) => {
  res.redirect(
    "https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313.TR11.TRC1.A0.H0.Xspace+gray+iphone+6s.TRS0&_nkw=space+gray+iphone+6s&_sacat=0"
  );
});
app.get("/millenialsgetoffendedeasily", (req, res) => res.send("ok boomer"));
app.get("/loss", (req, res) => res.send("|\n||\n||\n|_"));

// Serve static files.
app.get("/favicon.ico", (req, res) => {
  res.sendFile(`${__dirname}/public/favicon.ico`);
});
app.get("/img/:file", (req, res) => {
  res.sendFile(`${__dirname}/public/images/${req.params.file}`);
});
app.get("/css/:file", (req, res) => {
  res.sendFile(`${__dirname}/public/css/${req.params.file}`);
});
// Error pages.
app.use((req, res) => {
  // 404 Error
  res.status(404);
  res.render("404");
});
app.use((error, req, res, next) => {
  // 500 Error
  console.error(error);
  res.status(500);
  res.render("500", {
    title: "500: Internal Server Error",
    error: error
  });
});
/* - Listening - */
app.listen(3000, () => {
  console.log("Server listening on port 3000.");
});
