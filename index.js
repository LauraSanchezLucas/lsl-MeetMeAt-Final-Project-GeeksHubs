const express = require("express");
const cors = require('cors');

const db = require("./db.js");
require("dotenv").config();

const router = require("./router");

let corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions))
app.use(router);

const PORT = process.env.PORT || 4000;

db.then(() => {
  //Starting server
  app.listen(PORT, () => console.log("Server on port " + PORT));
}).catch((err) => console.log(err.message));
