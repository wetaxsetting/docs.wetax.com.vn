const express = require("express");

const { swaggerServe, swaggerSetup } = require('./config')
const app = express();

// middleware
app.use(express.json());

app.get("/docs" , function ( req, res) {
	res.redirect("/");
});
app.get("/api" , function ( req, res) {
	res.redirect("/");
});

app.use("/", swaggerServe, swaggerSetup); 

const port = 1110
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
