const express = require("express");
const itemsRouter = require("./routes/items");

const app = express();

app.use(express.json());


app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ error: 'Invalid JSON' });
  }
  next(err);
});


app.get("/api", (req, res) => {
  res.json({ status: "ok", message: "Express JSON API", version: "1.0" });
});


app.use("/api/items", itemsRouter);


app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});


app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});
