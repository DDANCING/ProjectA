

const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
try{
  await db.category.createMany({
    data: [
      {
        name: "Guitar"
    },
    {
        name: "Bass"
    },
    {
        name: "Piano"
    },
    {
        name: "Violin"
    },
    {
        name: "Drums"
    },
    {
        name: "Flute"
    },
    {
        name: "Saxophone"
    },
    {
        name: "Trumpet"
    },
    {
        name: "Voice"
    },
    {
        name: "Music Theory"
    },
    {
        name: "Songwriting"
    },
    {
        name: "Music Production"
    },
    {
        name: "Music History"
    },
    {
        name: "Jazz Improvisation"
    },
    {
        name: "Classical Music"
    },
    {
        name: "Electronic Music"
    },
    {
        name: "World Music"
    },
    {
        name: "other"
    }

    ]
  })
} catch(error) {
  console.log("Error seeding db category", error)
} finally {
  await db.$disconnect();
}
}
main();