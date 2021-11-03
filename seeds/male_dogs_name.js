const DogsNames = require('../models/dognames')

const maleNames = [
    {
        name: "Max,",
        type: "male"
    },
    {
        name: "Buddy,",
        type: "male"
    },
    {
        name: "Charlie,",
        type: "male"
    },
    {
        name: "Jack,",
        type: "male"
    },
    {
        name: "Cooper,",
        type: "male"
    },
    {
        name: "Rocky,",
        type: "male"
    },
    {
        name: "Toby,",
        type: "male"
    },
    {
        name: "Tucker,",
        type: "male"
    },
    {
        name: "Jake,",
        type: "male"
    },
    {
        name: "Bear,",
        type: "male"
    },
    {
        name: "Duke,",
        type: "male"
    },
    {
        name: "Teddy,",
        type: "male"
    },
    {
        name: "Oliver,",
        type: "male"
    },
    {
        name: "Riley,",
        type: "male"
    },
    {
        name: "Bailey,",
        type: "male"
    },
    {
        name: "Bentley,",
        type: "male"
    },
    {
        name: "Milo,",
        type: "male"
    },
    {
        name: "Buster,",
        type: "male"
    },
    {
        name: "Cody,",
        type: "male"
    },
    {
        name: "Dexter,",
        type: "male"
    },
    {
        name: "Winston,",
        type: "male"
    },
    {
        name: "Murphy,",
        type: "male"
    },
    {
        name: "Leo,",
        type: "male"
    },
    {
        name: "Lucky,",
        type: "male"
    },
    {
        name: "Oscar,",
        type: "male"
    },
    {
        name: "Louie,",
        type: "male"
    },
    {
        name: "Zeus,",
        type: "male"
    },
    {
        name: "Henry,",
        type: "male"
    },
    {
        name: "Sam,",
        type: "male"
    },
    {
        name: "Harley,",
        type: "male"
    },
    {
        name: "Baxter,",
        type: "male"
    },
    {
        name: "Gus,",
        type: "male"
    },
    {
        name: "Sammy,",
        type: "male"
    },
    {
        name: "Jackson,",
        type: "male"
    },
    {
        name: "Bruno,",
        type: "male"
    },
    {
        name: "Diesel,",
        type: "male"
    },
    {
        name: "Jax,",
        type: "male"
    },
    {
        name: "Gizmo,",
        type: "male"
    },
    {
        name: "Bandit,",
        type: "male"
    },
    {
        name: "Rusty,",
        type: "male"
    },
    {
        name: "Marley,",
        type: "male"
    },
    {
        name: "Jasper,",
        type: "male"
    },
    {
        name: "Brody,",
        type: "male"
    },
    {
        name: "Roscoe,",
        type: "male"
    },
    {
        name: "Hank,",
        type: "male"
    },
    {
        name: "Otis,",
        type: "male"
    },
    {
        name: "Bo,",
        type: "male"
    },
    {
        name: "Joey,",
        type: "male"
    },
    {
        name: "Beau,",
        type: "male"
    },
    {
        name: "Ollie,",
        type: "male"
    },
    {
        name: "Tank,",
        type: "male"
    },
    {
        name: "Shadow,",
        type: "male"
    },
    {
        name: "Peanut,",
        type: "male"
    },
    {
        name: "Hunter,",
        type: "male"
    },
    {
        name: "Scout,",
        type: "male"
    },
    {
        name: "Blue,",
        type: "male"
    },
    {
        name: "Rocco,",
        type: "male"
    },
    {
        name: "Simba,",
        type: "male"
    },
    {
        name: "Tyson,",
        type: "male"
    },
    {
        name: "Ziggy,",
        type: "male"
    },
    {
        name: "Boomer,",
        type: "male"
    },
    {
        name: "Romeo,",
        type: "male"
    },
    {
        name: "Apollo,",
        type: "male"
    },
    {
        name: "Ace,",
        type: "male"
    },
    {
        name: "Luke,",
        type: "male"
    },
    {
        name: "Rex,",
        type: "male"
    },
    {
        name: "Finn,",
        type: "male"
    },
    {
        name: "Chance,",
        type: "male"
    },
    {
        name: "Rudy,",
        type: "male"
    },
    {
        name: "Loki,",
        type: "male"
    },
    {
        name: "Moose,",
        type: "male"
    },
    {
        name: "George,",
        type: "male"
    },
    {
        name: "Samson,",
        type: "male"
    },
    {
        name: "Coco,",
        type: "male"
    },
    {
        name: "Benny,",
        type: "male"
    },
    {
        name: "Thor,",
        type: "male"
    },
    {
        name: "Rufus,",
        type: "male"
    },
    {
        name: "Prince,",
        type: "male"
    },
    {
        name: "Chester,",
        type: "male"
    },
    {
        name: "Brutus,",
        type: "male"
    },
    {
        name: "Scooter,",
        type: "male"
    },
    {
        name: "Chico,",
        type: "male"
    },
    {
        name: "Spike,",
        type: "male"
    },
    {
        name: "Gunner,",
        type: "male"
    },
    {
        name: "Sparky,",
        type: "male"
    },
    {
        name: "Mickey,",
        type: "male"
    },
    {
        name: "Kobe,",
        type: "male"
    },
    {
        name: "Chase,",
        type: "male"
    },
    {
        name: "Oreo,",
        type: "male"
    },
    {
        name: "Frankie,",
        type: "male"
    },
    {
        name: "Mac,",
        type: "male"
    },
    {
        name: "Benji,",
        type: "male"
    },
    {
        name: "Bubba,",
        type: "male"
    },
    {
        name: "Champ,",
        type: "male"
    },
    {
        name: "Brady,",
        type: "male"
    },
    {
        name: "Elvis,",
        type: "male"
    },
    {
        name: "Copper,",
        type: "male"
    },
    {
        name: "Cash,",
        type: "male"
    },
    {
        name: "Archie,",
        type: "male"
    },
    {
        name: "Walter",
        type: "male"
    }
]

const seedMaleDogs = () => DogsNames.bulkCreate(maleNames);

module.exports = seedMaleDogs;