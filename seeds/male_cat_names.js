const CatNames = require('../models/catnames')

const maleNames = [
    {
        "name": "Axel",
        "gender": "Male"
    },
    {
        "name": "Bacon",
        "gender": "Male"
    },
    {
        "name": "Bandit",
        "gender": "Male"
    },
    {
        "name": "Bear",
        "gender": "Male"
    },
    {
        "name": "Binks",
        "gender": "Male"
    },
    {
        "name": "Binx",
        "gender": "Male"
    },
    {
        "name": "Bob",
        "gender": "Male"
    },
    {
        "name": "Boo",
        "gender": "Male"
    },
    {
        "name": "Boots",
        "gender": "Male"
    },
    {
        "name": "Bruiser",
        "gender": "Male"
    },
    {
        "name": "Bubba",
        "gender": "Male"
    },
    {
        "name": "Buddy",
        "gender": "Male"
    },
    {
        "name": "Buster",
        "gender": "Male"
    },
    {
        "name": "Casper",
        "gender": "Male"
    },
    {
        "name": "Charlie",
        "gender": "Male"
    },
    {
        "name": "Cheeto",
        "gender": "Male"
    },
    {
        "name": "Chester",
        "gender": "Male"
    },
    {
        "name": "Ducky",
        "gender": "Male"
    },
    {
        "name": "Dusty",
        "gender": "Male"
    },
    {
        "name": "Fang",
        "gender": "Male"
    },
    {
        "name": "Felix",
        "gender": "Male"
    },
    {
        "name": "Frodo",
        "gender": "Male"
    },
    {
        "name": "Garfield",
        "gender": "Male"
    },
    {
        "name": "Gato",
        "gender": "Male"
    },
    {
        "name": "George",
        "gender": "Male"
    },
    {
        "name": "Gus",
        "gender": "Male"
    },
    {
        "name": "Harley",
        "gender": "Male"
    },
    {
        "name": "Jack",
        "gender": "Male"
    },
    {
        "name": "Jasper",
        "gender": "Male"
    },
    {
        "name": "Jiggles",
        "gender": "Male"
    },
    {
        "name": "Joey",
        "gender": "Male"
    },
    {
        "name": "Leo",
        "gender": "Male"
    },
    {
        "name": "Loki",
        "gender": "Male"
    },
    {
        "name": "Lucifer",
        "gender": "Male"
    },
    {
        "name": "Lucky",
        "gender": "Male"
    },
    {
        "name": "Machete",
        "gender": "Male"
    },
    {
        "name": "Max",
        "gender": "Male"
    },
    {
        "name": "Meatball",
        "gender": "Male"
    },
    {
        "name": "Midnight",
        "gender": "Male"
    },
    {
        "name": "Milo",
        "gender": "Male"
    },
    {
        "name": "Mittens",
        "gender": "Male"
    },
    {
        "name": "Momoa",
        "gender": "Male"
    },
    {
        "name": "Mr. Bigglesworth",
        "gender": "Male"
    },
    {
        "name": "Nacho",
        "gender": "Male"
    },
    {
        "name": "Oliver",
        "gender": "Male"
    },
    {
        "name": "Oreo",
        "gender": "Male"
    },
    {
        "name": "Oscar",
        "gender": "Male"
    },
    {
        "name": "Peanut",
        "gender": "Male"
    },
    {
        "name": "Pork Chop",
        "gender": "Male"
    },
    {
        "name": "Porky",
        "gender": "Male"
    },
    {
        "name": "Pumpkin",
        "gender": "Male"
    },
    {
        "name": "Rascal",
        "gender": "Male"
    },
    {
        "name": "Riley",
        "gender": "Male"
    },
    {
        "name": "Rocky",
        "gender": "Male"
    },
    {
        "name": "Romeo",
        "gender": "Male"
    },
    {
        "name": "Salem",
        "gender": "Male"
    },
    {
        "name": "Sam",
        "gender": "Male"
    },
    {
        "name": "Sammy",
        "gender": "Male"
    },
    {
        "name": "Scooter",
        "gender": "Male"
    },
    {
        "name": "Simba",
        "gender": "Male"
    },
    {
        "name": "Simon",
        "gender": "Male"
    },
    {
        "name": "Sirius",
        "gender": "Male"
    },
    {
        "name": "Smokey",
        "gender": "Male"
    },
    {
        "name": "Snickers",
        "gender": "Male"
    },
    {
        "name": "Socks",
        "gender": "Male"
    },
    {
        "name": "Spooky",
        "gender": "Male"
    },
    {
        "name": "Storm",
        "gender": "Male"
    },
    {
        "name": "Tater",
        "gender": "Male"
    },
    {
        "name": "Teddy",
        "gender": "Male"
    },
    {
        "name": "Tiger",
        "gender": "Male"
    },
    {
        "name": "Tigger",
        "gender": "Male"
    },
    {
        "name": "Toby",
        "gender": "Male"
    },
    {
        "name": "Trouble",
        "gender": "Male"
    },
    {
        "name": "Voodoo",
        "gender": "Male"
    }
]

const seedMaleCats = () => CatsNames.bulkCreate(maleNames);

module.exports = seedMaleCats;