const express = require('express');
const app = express();

const path = require("node:path");
const indexRouter = require('./routes/indexRouter');

const PORT = 8080;

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/', indexRouter);

app.listen(PORT, () => console.log(`mini message board running on port ${PORT}`));