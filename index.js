const express = require("express");
const connectDB = require("./database");

const app = express();
connectDB();

app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get("/favicon.ico", (req, res) => res.status(204).end());
