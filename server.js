///////////// INITIAL SETUP
// require("dotenv").config()
const express = require("express") // to require express
const drinks = require("./models/drinks") // to access the drinks "database"
// const PORT = process.env.PORT // to get the PORT from .env file
const app = express()

///////////// ROUTES
app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/drinks", (req, res) => {
    res.send(drinks);
})


///////////// LISTENER
app.listen(3000, () => {
    console.log(`I'm listening!`)
})
