const db = require("../services/queries");

async function gameStart(req, res) {
    res.json({ msg: "Game started"})
}

async function gameEnd(req, res) {
    res.json({msg: "Game ended"})
}
 

module.exports = {
    gameStart,
    gameEnd
}