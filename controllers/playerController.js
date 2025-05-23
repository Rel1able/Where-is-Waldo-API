const db = require("../services/queries");
const { body, validationResult } = require("express-validator");


const validatePlayer = [
    body("username")
        .trim()
        .isLength({min: 3, max: 10}).withMessage("Username must be between 3 and 10 characters long")
]

async function gameStart(req, res) {
    const session = await db.createGameSession()
    res.status(200).json({msg: "Game started", session})
}

async function gameEnd(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
       return res.status(400).json({errors: errors.array()})
    }
    const { sessionId, username = "anonymous" } = req.body;
    const score = await db.endGame(sessionId, username )

    res.status(200).json({
        msg: "Score saved",
        score
    })
}

async function getPlayersForLeaderBoard(req, res) {
    const players = await db.getPlayersForLeaderBoard();
    res.status(200).json({"players": players})
}
 

async function savePlayerTime(req, res) {
    const { sessionId } = req.body;
    await db.saveTime(sessionId)
    res.json({msg: "Time was saved"})
}


module.exports = {
    gameStart,
    gameEnd,
    getPlayersForLeaderBoard,
    savePlayerTime,
    validatePlayer
}