import express from "express";

const app = express();
const port = 3000;

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


app.set('view engine', 'ejs');

// List de posts
let listBlog = [];

app.get("/", (req, res) => {
  res.render("index.ejs", { listBlog });
});

//about
app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

// POST para criar um novo post
app.post("/create", (req, res) => {
  const dataInputs = {
    author: req.body.author,
    content: req.body.content,
    date: new Date().toDateString(), //format the date
  };

  listBlog.push(dataInputs);
  res.redirect("/"); // Redireciona corretamente
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
