const express = require("express")
const path = require("path")
const app = express()

/*
    Setup middleware
*/
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set("view engine", "ejs")


/*
    Route
*/
app.get("/", (req, res) => {
    res.render("pages/index.ejs")
})
app.get("/login", (req, res) => {
    res.render("pages/login.ejs")
})
app.get("/docs", (req, res) => {
    res.render("pages/docs.ejs")
})

app.listen(8080, () => console.log("Running"))