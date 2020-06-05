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
app.get("/projects", (req, res) => {
  res.render("projects");
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
let error404 = (req, res) => {
  // 404 Error
  res.status(404);
  res.render("404");
};
app.get("/404", error404);
app.use(error404);
let error500 = (error, req, res, next) => {
  // 500 Error
  console.error(error);
  res.status(500);
  res.render("500", {
    title: "500: Internal Server Error",
    error: error
  });
};
app.get("/500", error500);
app.use(error500);
/* - Listening - */
app.listen(3000, () => {
  console.log("Server listening on port 3000.");
});
