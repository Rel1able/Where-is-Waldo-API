const express = require("express");
const charactersController = require("../controllers/charactersController");

const charactersRouter = express.Router();

charactersRouter.get("/", charactersController.getCharacters);
charactersRouter.get("/ping", charactersController.ping);


charactersRouter.post("/game-start", (req, res) => {
    req.session.bestTime = "999999"; 
    console.log(req.session)
})

charactersRouter.post("/game-end", (req, res) => {
    req.session.username = req.body.username;
    if (+req.body.time < +req.session.bestTime) {
        req.session.bestTime = req.body.time;
    }
    console.log(req.session);
})

charactersRouter.post("/", charactersController.addCharacter);

charactersRouter.get("/:name", charactersController.validateCoordinates)

module.exports = charactersRouter;