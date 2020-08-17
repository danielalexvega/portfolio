const path = require("path");

module.exports = app => {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/portfolio", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/portfolio.html"));
  });

  app.get("/blog", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  })

  app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  })
}