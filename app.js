const logger = require("morgan");
const express = require("express");
const projects = require("./data/projects.json");
const articles = require("./data/articles.json");

const app = express();
const PORT = 5005;

// CREATE EXPRESS APP
// Here you should create your Express app:

// MIDDLEWARE
// Here you should set up the required middleware:

app.use(express.static("public"));
app.use(express.json());
app.use(logger("dev"));

// ROUTES
// Start defining your routes here:

app.get("/api/projects", (req, res, next) => {
  res.json(projects);
});

app.get("/api/articles", (req, res, next) => {
  res.json(articles);
});

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.listen(PORT, () => {
  console.log(`Server listening on port...${PORT}`);
});

app.use((res, req, next) => {
  res.statusCode(404).sendFile(__dirname + "./views/not-found.html");
});
