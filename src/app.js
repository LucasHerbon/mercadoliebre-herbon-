const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "../public");

app.use(express.static(publicPath));

const port = process.env.PORT || 3030;
app.listen(port, () => console.log (`Servidor corriendo en: http://localhost:${port}`));
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});

//esto es solo para cumplir con lo visual del mercado liebre
app.post("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
});

app.post("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
});