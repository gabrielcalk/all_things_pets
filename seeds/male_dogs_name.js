const DogsNames = require('../models/dognames')

const maleNames = [
    {
        name: "Max",
        type: "Male"
    },
    {
        name: "Buddy",
        type: "Male"
    },
    {
        name: "Charlie",
        type: "Male"
    },
    {
        name: "Jack",
        type: "Male"
    },
    {
        name: "Cooper",
        type: "Male"
    },
    {
        name: "Rocky",
        type: "Male"
    },
    {
        name: "Toby",
        type: "Male"
    },
    {
        name: "Tucker",
        type: "Male"
    },
    {
        name: "Jake",
        type: "Male"
    },
    {
        name: "Bear",
        type: "Male"
    },
    {
        name: "Duke",
        type: "Male"
    },
    {
        name: "Teddy",
        type: "Male"
    },
    {
        name: "Oliver",
        type: "Male"
    },
    {
        name: "Riley",
        type: "Male"
    },
    {
        name: "Bailey",
        type: "Male"
    },
    {
        name: "Bentley",
        type: "Male"
    },
    {
        name: "Milo",
        type: "Male"
    },
    {
        name: "Buster",
        type: "Male"
    },
    {
        name: "Cody",
        type: "Male"
    },
    {
        name: "Dexter",
        type: "Male"
    },
    {
        name: "Winston",
        type: "Male"
    },
    {
        name: "Murphy",
        type: "Male"
    },
    {
        name: "Leo",
        type: "Male"
    },
    {
        name: "Lucky",
        type: "Male"
    },
    {
        name: "Oscar",
        type: "Male"
    },
    {
        name: "Louie",
        type: "Male"
    },
    {
        name: "Zeus",
        type: "Male"
    },
    {
        name: "Henry",
        type: "Male"
    },
    {
        name: "Sam",
        type: "Male"
    },
    {
        name: "Harley",
        type: "Male"
    },
    {
        name: "Baxter",
        type: "Male"
    },
    {
        name: "Gus",
        type: "Male"
    },
    {
        name: "Sammy",
        type: "Male"
    },
    {
        name: "Jackson",
        type: "Male"
    },
    {
        name: "Bruno",
        type: "Male"
    },
    {
        name: "Diesel",
        type: "Male"
    },
    {
        name: "Jax",
        type: "Male"
    },
    {
        name: "Gizmo",
        type: "Male"
    },
    {
        name: "Bandit",
        type: "Male"
    },
    {
        name: "Rusty",
        type: "Male"
    },
    {
        name: "Marley",
        type: "Male"
    },
    {
        name: "Jasper",
        type: "Male"
    },
    {
        name: "Brody",
        type: "Male"
    },
    {
        name: "Roscoe",
        type: "Male"
    },
    {
        name: "Hank",
        type: "Male"
    },
    {
        name: "Otis",
        type: "Male"
    },
    {
        name: "Bo",
        type: "Male"
    },
    {
        name: "Joey",
        type: "Male"
    },
    {
        name: "Beau",
        type: "Male"
    },
    {
        name: "Ollie",
        type: "Male"
    },
    {
        name: "Tank",
        type: "Male"
    },
    {
        name: "Shadow",
        type: "Male"
    },
    {
        name: "Peanut",
        type: "Male"
    },
    {
        name: "Hunter",
        type: "Male"
    },
    {
        name: "Scout",
        type: "Male"
    },
    {
        name: "Blue",
        type: "Male"
    },
    {
        name: "Rocco",
        type: "Male"
    },
    {
        name: "Simba",
        type: "Male"
    },
    {
        name: "Tyson",
        type: "Male"
    },
    {
        name: "Ziggy",
        type: "Male"
    },
    {
        name: "Boomer",
        type: "Male"
    },
    {
        name: "Romeo",
        type: "Male"
    },
    {
        name: "Apollo",
        type: "Male"
    },
    {
        name: "Ace",
        type: "Male"
    },
    {
        name: "Luke",
        type: "Male"
    },
    {
        name: "Rex",
        type: "Male"
    },
    {
        name: "Finn",
        type: "Male"
    },
    {
        name: "Chance",
        type: "Male"
    },
    {
        name: "Rudy",
        type: "Male"
    },
    {
        name: "Loki",
        type: "Male"
    },
    {
        name: "Moose",
        type: "Male"
    },
    {
        name: "George",
        type: "Male"
    },
    {
        name: "Samson",
        type: "Male"
    },
    {
        name: "Coco",
        type: "Male"
    },
    {
        name: "Benny",
        type: "Male"
    },
    {
        name: "Thor",
        type: "Male"
    },
    {
        name: "Rufus",
        type: "Male"
    },
    {
        name: "Prince",
        type: "Male"
    },
    {
        name: "Chester",
        type: "Male"
    },
    {
        name: "Brutus",
        type: "Male"
    },
    {
        name: "Scooter",
        type: "Male"
    },
    {
        name: "Chico",
        type: "Male"
    },
    {
        name: "Spike",
        type: "Male"
    },
    {
        name: "Gunner",
        type: "Male"
    },
    {
        name: "Sparky",
        type: "Male"
    },
    {
        name: "Mickey",
        type: "Male"
    },
    {
        name: "Kobe",
        type: "Male"
    },
    {
        name: "Chase",
        type: "Male"
    },
    {
        name: "Oreo",
        type: "Male"
    },
    {
        name: "Frankie",
        type: "Male"
    },
    {
        name: "Mac",
        type: "Male"
    },
    {
        name: "Benji",
        type: "Male"
    },
    {
        name: "Bubba",
        type: "Male"
    },
    {
        name: "Champ",
        type: "Male"
    },
    {
        name: "Brady",
        type: "Male"
    },
    {
        name: "Elvis",
        type: "Male"
    },
    {
        name: "Copper",
        type: "Male"
    },
    {
        name: "Cash",
        type: "Male"
    },
    {
        name: "Archie",
        type: "Male"
    },
    {
        name: "Walter",
        type: "Male"
    }
]

const seedMaleDogs = () => DogsNames.bulkCreate(maleNames);

module.exports = seedMaleDogs;