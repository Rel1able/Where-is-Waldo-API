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


async function getPlayersForLeaderBoard() {
    const players = await prisma.gameSession.findMany({
        orderBy: {
            duration: "asc"
        },
        select: {
            duration: true,
            username: true
        }
    })
    return players
}

async function getPlayerByName(username) {
    const player = await prisma.gameSession.findFirst({
        where: {
            username: username,
            endedAt: null
        }
    })
    return player
}

async function createGameSession() {
    const session = await prisma.gameSession.create();
    return session;
}

async function getSessionById(sessionId) {
    const session = await prisma.gameSession.findUnique({
        where: {
            id: sessionId
        }
    });
    return session
}

async function endGame(sessionId, username) {
    return await prisma.gameSession.update({
        where: {
            id: sessionId
        },
        data: {
            username: username

        }
    })
}

async function saveTime(sessionId) {
    const session = await getSessionById(sessionId);
    const endedAt = new Date();

    const durationInSeconds = (endedAt - new Date(session.startedAt)) / 1000;

    return await prisma.gameSession.update({
        where: {
            id: sessionId
        },
        data: {
            endedAt: endedAt,
            duration: durationInSeconds
        }
    })
}


module.exports = {
    createCharacter,
    getCharacters,
    getCharacterByName,
    getPlayersForLeaderBoard,
    getPlayerByName,
    createGameSession,
    endGame,
    saveTime
}