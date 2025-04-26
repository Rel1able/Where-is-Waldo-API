const express = require("express");
const app = express();
const cors = require("cors");
const charactersRouter = require("./routes/charactersRouter");

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());
app.use(charactersRouter);

app.listen(process.env.PORT, () => {
    console.log("App is running");
})