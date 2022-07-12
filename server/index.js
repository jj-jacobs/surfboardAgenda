const express = require("express");
const session = require("express-session");
const flash = require("express-flash");
const cors = require('cors');


const app = express();
const server = app.listen(8000);

app.set("view engine", "ejs");
app.set("views", __dirname + "/public");
app.set('trust proxy', 1)


app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
app.use(session({
    secret: "sphagetti and meatballs baby -Donek",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
app.use(express.json())
app.use(flash());

require('./config/mongoose');
require('./config/routes')(app);
const io = require("socket.io")(server);

module.exports = io