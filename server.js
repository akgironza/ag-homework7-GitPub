///////////// INITIAL SETUP
// require("dotenv").config()
const express = require("express") // to require express
const drinks = require("./models/drinks.js") // to access the drinks "database"
// const PORT = process.env.PORT // to get the PORT from .env file
const app = express()

///////////// ROUTES
app.get("/", (req, res) => {
    res.render("index.ejs", {drinks});
})

app.get("/drinks", (req, res) => {
    res.send(drinks);
})

app.get("/drink/:id", (req, res) => {
    // grab the id from the url
    const id = req.params.id
    // create a variable with the drink specified
    const drink = drinks[id]
    // dynamically set a class, if needed (example: const readyClass = fruit.readyToEat ? "green" : "red")
    // render a template with the fruit
    res.render("show.ejs", {drink})
})

///////////// LISTENER
app.listen(3000, () => {
    console.log(`I'm listening!`)
})
