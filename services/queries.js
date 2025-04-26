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

module.exports = {
    createCharacter,
    getCharacters,
    getCharacterByName
}