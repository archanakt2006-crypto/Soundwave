import express from "express";

const app = express();
const port = 5000;

app.set("view engine", "ejs");

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})

app.get("/", (req, res) => {
    res.render("home");
})
