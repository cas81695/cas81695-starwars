module.exports = function(app) {

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  app.get("/add", (req, res) => {
    res.sendFile(path.join(__dirname, "add.html"));
  });

}