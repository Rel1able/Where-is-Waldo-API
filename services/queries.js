const { PrismaClient} = require("../generated/prisma");
const prisma = new PrismaClient();


async function createCharacter(name, coordinates) {
   const character =  await prisma.character.create({
        data: {
            name: name,
            coordinates: coordinates
        }
   })
    return character
}

async function getCharacters() {
    const characters = await prisma.character.findMany();
    return characters;
}

async function getCharacterByName(name) {
    const character = await prisma.character.findFirst({
        where: {
            name: name
        }
    })
    return character
}


async function createOrUpdatePlayer(username, time, bestTime) {
    await prisma.player.upsert({
        where: {
            name: username
        },
        update: {
            bestTime: time < parseFloat(bestTime) ? time : undefined
        },
        create: {
            name: username,
            bestTime: time
        }
    })
}

async function getPlayersForLeaderBoard() {
    const players = await prisma.player.findMany({
        orderBy: {
            bestTime: "asc",
        },
        select: {
            bestTime: true,
            name: true
        }
    })
    return players
}

async function getPlayerByName(username) {
    const player = await prisma.player.findUnique({
        where: {
            name: username
        }
    })
    return player
}

module.exports = {
    createCharacter,
    getCharacters,
    getCharacterByName,
    createOrUpdatePlayer,
    getPlayersForLeaderBoard,
    getPlayerByName
}