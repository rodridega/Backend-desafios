const express = require("express");
const app = express();

const { engine } = require("express-handlebars");

app.engine("handlebars", engine());

app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("datos", {
    title: "Productos CODER",
    productos: 
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
