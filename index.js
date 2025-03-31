import express from "express";

const app = express()
const port = 3000;
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render("index.ejs")
})

app.get("/about", (req, res) => {
  res.render("about.ejs")
})

app.get("/create", (req, res) => {
  res.render("create.ejs")
})

/* POST */
app.post("/create", (req, res) => {

})
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})