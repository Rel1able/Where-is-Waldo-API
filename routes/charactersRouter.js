const express = require("express");
const charactersController = require("../controllers/charactersController");

const charactersRouter = express.Router();

charactersRouter.get("/", charactersController.getCharacters);
charactersRouter.get("/ping", charactersController.ping);
charactersRouter.post("/", charactersController.addCharacter);

charactersRouter.get("/:name", charactersController.validateCoordinates)

module.exports = charactersRouter;