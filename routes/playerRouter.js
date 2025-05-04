const express = require("express");
const playerRouter = express.Router();
const playerController = require("../controllers/playerController");


playerRouter.post("/start", playerController.gameStart);
playerRouter.post("/end",playerController.validatePlayer, playerController.gameEnd);

playerRouter.get("/leaderboard", playerController.getPlayersForLeaderBoard)



module.exports = playerRouter