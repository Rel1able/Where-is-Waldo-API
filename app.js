require("dotenv").config()

const express = require("express");
const app = express();
const cors = require("cors");
const charactersRouter = require("./routes/charactersRouter");
const playerRouter = require("./routes/playerRouter");

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());
app.use(charactersRouter);
app.use("/game",playerRouter);

app.listen(process.env.PORT || 8000, () => {
    console.log(`App is running on port ${process.env.PORT}`);
})