require("dotenv").config()
const expressSession = require("express-session");
const { PrismaSessionStore } = require("@quixo3/prisma-session-store");
const { PrismaClient } = require("./generated/prisma");

const express = require("express");
const app = express();
const cors = require("cors");
const charactersRouter = require("./routes/charactersRouter");
const playerRouter = require("./routes/playerRouter");

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(
    expressSession({
        cookie: {
            maxAge: 24 * 60 * 60 * 1000,
            secure: true,
            sameSite: "none"
        },
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        store: new PrismaSessionStore(
            new PrismaClient(),
            {
                checkPeriod: 2 * 60 * 1000,
                dbRecordIdIsSessionId: true, 
                dbRecordIdFunction: undefined
            }
        )
    })
)
app.use(charactersRouter);
app.use("/game",playerRouter);

app.listen(process.env.PORT || 8000, () => {
    console.log(`App is running on port ${process.env.PORT}`);
})