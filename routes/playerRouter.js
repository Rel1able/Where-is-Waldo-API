const express = require("express");
const playerRouter = express.Router();
const playerController = require("../controllers/playerController");


playerRouter.get("/start", playerController.gameStart);
playerRouter.get("/end", playerController.gameEnd);



module.exports = playerRouter