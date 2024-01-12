require("dotenv").config();

HOST = process.env.HOST;
PORT = process.env.PORT;

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

const path = require('path');

// CORS
app.use(cors());

// Parse JSON
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "dist")));


app.get("/*", (req, res) => {
	return res.sendFile(path.join(__dirname, "dist", "index.html"));
});


app.listen(PORT, HOST, () => {
	console.log(`Server is running on http://${HOST}:${PORT}`);
});