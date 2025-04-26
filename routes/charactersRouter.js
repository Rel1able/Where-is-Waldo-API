const express = require("express");
const charactersController = require("../controllers/charactersController");

const charactersRouter = express.Router();

charactersRouter.get("/", charactersController.getCharacters);

charactersRouter.post("/", charactersController.addCharacter);

charactersRouter.get("/:name", charactersController.validateCoordinates)

module.exports = charactersRouter;