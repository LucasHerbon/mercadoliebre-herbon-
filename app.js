const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));


app.listen(3030, () => console.log ("Servidor corriendo en: http://localhost:3030/"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./src/views/index.html"))
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./src/views/register.html"))
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./src/views/login.html"))
});

//esto es solo para cumplir con lo visual del mercado liebre
app.post("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./src/views/index.html"))
});

app.post("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./src/views/index.html"))
});