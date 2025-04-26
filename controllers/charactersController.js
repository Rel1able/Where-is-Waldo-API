const db = require("../services/queries");

async function getCharacters(req, res) {
    const characters = await db.getCharacters();
    res.json(characters);
}


async function addCharacter(req, res) {
    const character = await db.createCharacter(req.body.name, req.body.coordinates);
    console.log(character);
    res.json(character);
}


async function validateCoordinates(req, res) {
    const TARGET_BOX_SIZE = 5;
    const name = req.params.name;
    console.log("Query",req.query);
    console.log(name);
    const character = await db.getCharacterByName(name);
    const x = character.coordinates.x;
    const y = character.coordinates.y;
    const userX = req.query.x;
    const userY = req.query.y;

    if (
        (userX > x + TARGET_BOX_SIZE / 2 ||
            userX < x - TARGET_BOX_SIZE / 2) ||
        (userY > y + TARGET_BOX_SIZE / 2 ||
            userY < y - TARGET_BOX_SIZE / 2)) {
        res.status(400).json("Wrong one")
    } else {
        res.status(200).json("You are right")
    }

    console.log(character);

}

async function ping(req, res) {
    res.json("Server is running");
}

module.exports = {
    getCharacters,
    addCharacter,
    validateCoordinates,
    ping
}