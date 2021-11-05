const DogsNames = require('../models/dognames')

const femaleNames = [
    {
        name: "Bella",
        type: "Female"
    },
    {
        name: "Lucy",
        type: "Female"
    },
    {
        name: "Daisy",
        type: "Female"
    },
    {
        name: "Molly",
        type: "Female"
    },
    {
        name: "Lola",
        type: "Female"
    },
    {
        name: "Sophie",
        type: "Female"
    },
    {
        name: "Sadie",
        type: "Female"
    },
    {
        name: "Maggie",
        type: "Female"
    },
    {
        name: "Chloe",
        type: "Female"
    },
    {
        name: "Bailey",
        type: "Female"
    },
    {
        name: "Roxy",
        type: "Female"
    },
    {
        name: "Zoey",
        type: "Female"
    },
    {
        name: "Lily",
        type: "Female"
    },
    {
        name: "Luna",
        type: "Female"
    },
    {
        name: "Coco",
        type: "Female"
    },
    {
        name: "Stella",
        type: "Female"
    },
    {
        name: "Gracie",
        type: "Female"
    },
    {
        name: "Abby",
        type: "Female"
    },
    {
        name: "Penny",
        type: "Female"
    },
    {
        name: "Zoe",
        type: "Female"
    },
    {
        name: "Ginger",
        type: "Female"
    },
    {
        name: "Ruby",
        type: "Female"
    },
    {
        name: "Rosie",
        type: "Female"
    },
    {
        name: "Lilly",
        type: "Female"
    },
    {
        name: "Ellie",
        type: "Female"
    },
    {
        name: "Mia",
        type: "Female"
    },
    {
        name: "Sasha",
        type: "Female"
    },
    {
        name: "Lulu",
        type: "Female"
    },
    {
        name: "Pepper",
        type: "Female"
    },
    {
        name: "Nala",
        type: "Female"
    },
    {
        name: "Lexi",
        type: "Female"
    },
    {
        name: "Lady",
        type: "Female"
    },
    {
        name: "Emma",
        type: "Female"
    },
    {
        name: "Riley",
        type: "Female"
    },
    {
        name: "Dixie",
        type: "Female"
    },
    {
        name: "Annie",
        type: "Female"
    },
    {
        name: "Maddie",
        type: "Female"
    },
    {
        name: "Piper",
        type: "Female"
    },
    {
        name: "Princess",
        type: "Female"
    },
    {
        name: "Izzy",
        type: "Female"
    },
    {
        name: "Maya",
        type: "Female"
    },
    {
        name: "Olive",
        type: "Female"
    },
    {
        name: "Cookie",
        type: "Female"
    },
    {
        name: "Roxie",
        type: "Female"
    },
    {
        name: "Angel",
        type: "Female"
    },
    {
        name: "Belle",
        type: "Female"
    },
    {
        name: "Layla",
        type: "Female"
    },
    {
        name: "Missy",
        type: "Female"
    },
    {
        name: "Cali",
        type: "Female"
    },
    {
        name: "Honey",
        type: "Female"
    },
    {
        name: "Millie",
        type: "Female"
    },
    {
        name: "Harley",
        type: "Female"
    },
    {
        name: "Marley",
        type: "Female"
    },
    {
        name: "Holly",
        type: "Female"
    },
    {
        name: "Kona",
        type: "Female"
    },
    {
        name: "Shelby",
        type: "Female"
    },
    {
        name: "Jasmine",
        type: "Female"
    },
    {
        name: "Ella",
        type: "Female"
    },
    {
        name: "Charlie",
        type: "Female"
    },
    {
        name: "Minnie",
        type: "Female"
    },
    {
        name: "Willow",
        type: "Female"
    },
    {
        name: "Phoebe",
        type: "Female"
    },
    {
        name: "Callie",
        type: "Female"
    },
    {
        name: "Scout",
        type: "Female"
    },
    {
        name: "Katie",
        type: "Female"
    },
    {
        name: "Dakota",
        type: "Female"
    },
    {
        name: "Sugar",
        type: "Female"
    },
    {
        name: "Sandy",
        type: "Female"
    },
    {
        name: "Josie",
        type: "Female"
    },
    {
        name: "Macy",
        type: "Female"
    },
    {
        name: "Trixie",
        type: "Female"
    },
    {
        name: "Winnie",
        type: "Female"
    },
    {
        name: "Peanut",
        type: "Female"
    },
    {
        name: "Mimi",
        type: "Female"
    },
    {
        name: "Hazel",
        type: "Female"
    },
    {
        name: "Mocha",
        type: "Female"
    },
    {
        name: "Cleo",
        type: "Female"
    },
    {
        name: "Hannah",
        type: "Female"
    },
    {
        name: "Athena",
        type: "Female"
    },
    {
        name: "Lacey",
        type: "Female"
    },
    {
        name: "Sassy",
        type: "Female"
    },
    {
        name: "Lucky",
        type: "Female"
    },
    {
        name: "Bonnie",
        type: "Female"
    },
    {
        name: "Allie",
        type: "Female"
    },
    {
        name: "Brandy",
        type: "Female"
    },
    {
        name: "Sydney",
        type: "Female"
    },
    {
        name: "Casey",
        type: "Female"
    },
    {
        name: "Gigi",
        type: "Female"
    },
    {
        name: "Baby",
        type: "Female"
    },
    {
        name: "Madison",
        type: "Female"
    },
    {
        name: "Heidi",
        type: "Female"
    },
    {
        name: "Sally",
        type: "Female"
    },
    {
        name: "Shadow",
        type: "Female"
    },
    {
        name: "Cocoa",
        type: "Female"
    },
    {
        name: "Pebbles",
        type: "Female"
    },
    {
        name: "Misty",
        type: "Female"
    },
    {
        name: "Nikki",
        type: "Female"
    },
    {
        name: "Lexie",
        type: "Female"
    },
    {
        name: "Grace",
        type: "Female"
    },
    {
        name: "Sierra",
        type: "Female"
    }
]

const seedFemaleDogs = () => DogsNames.bulkCreate(femaleNames);

module.exports = seedFemaleDogs;