const db = require("../services/queries");
const { body, validationResult } = require("express-validator");


const validatePlayer = [
    body("username")
        .trim()
        .isLength({min: 3}).withMessage("Username mist be at least 3 characters long")
        .custom((async (username) => {
            const user = await db.getPlayerByName(username);
            if (user) {
                throw new Error("Username is already taken");
            }
        }))
]

async function gameStart(req, res) {
    if (!req.session.bestTime) {
        req.session.bestTime = "999999";
    }
    res.status(200).json({msg: "Game started"})
}

async function gameEnd(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
       return res.status(400).json({errors: errors.array()})
    }

    const username = req.body.username;
    const time = parseFloat(req.body.time);

    if (!req.session.bestTime) {
        req.session.bestTime = "999999";
    }

    req.session.username = username;
    if (time < parseFloat(req.session.bestTime)) {
        req.session.bestTime = req.body.time;
    }
    await db.createOrUpdatePlayer(username, time, req.session.bestTime)

    res.status(200).json({
        msg: "Score saved",
        bestTime: req.session.bestTime
    })
}

async function getPlayersForLeaderBoard(req, res) {
    const players = await db.getPlayersForLeaderBoard();
    res.status(200).json({"players": players})
}
 

module.exports = {
    gameStart,
    gameEnd,
    getPlayersForLeaderBoard,
    validatePlayer
}