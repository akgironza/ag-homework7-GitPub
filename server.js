///////////// INITIAL SETUP
// require express
const express = require("express")
const app = express()

///////////// ROUTES
app.get("/", (req, res) => {
    res.send('Welcome to the Gitpub App!');
})


///////////// LISTENER
app.listen(3000, () => {
    console.log(`I'm listening!`)
})
