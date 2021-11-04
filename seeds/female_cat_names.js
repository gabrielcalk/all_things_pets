const CatNames = require('../models/catnames')

const femaleNames = [
        {
            "name": "Abby",
            "gender": "Female"
        },
        {
            "name": "Angel",
            "gender": "Female"
        },
        {
            "name": "Annie",
            "gender": "Female"
        },
        {
            "name": "Baby",
            "gender": "Female"
        },
        {
            "name": "Bailey",
            "gender": "Female"
        },
        {
            "name": "Bella",
            "gender": "Female"
        },
        {
            "name": "Biscuit",
            "gender": "Female"
        },
        {
            "name": "Blanche",
            "gender": "Female"
        },
        {
            "name": "Brownie",
            "gender": "Female"
        },
        {
            "name": "Bubbles",
            "gender": "Female"
        },
        {
            "name": "Buttons",
            "gender": "Female"
        },
        {
            "name": "Buttercup",
            "gender": "Female"
        },
        {
            "name": "Cali",
            "gender": "Female"
        },
        {
            "name": "Callie",
            "gender": "Female"
        },
        {
            "name": "Chloe",
            "gender": "Female"
        },
        {
            "name": "Cleo",
            "gender": "Female"
        },
        {
            "name": "Clover",
            "gender": "Female"
        },
        {
            "name": "Coco",
            "gender": "Female"
        },
        {
            "name": "Cookie",
            "gender": "Female"
        },
        {
            "name": "Cuddles",
            "gender": "Female"
        },
        {
            "name": "Daisy",
            "gender": "Female"
        },
        {
            "name": "Dottie",
            "gender": "Female"
        },
        {
            "name": "Fiona",
            "gender": "Female"
        },
        {
            "name": "Fluffy",
            "gender": "Female"
        },
        {
            "name": "Gilly",
            "gender": "Female"
        },
        {
            "name": "Ginger",
            "gender": "Female"
        },
        {
            "name": "Gizmo",
            "gender": "Female"
        },
        {
            "name": "Gracie",
            "gender": "Female"
        },
        {
            "name": "Jasmine",
            "gender": "Female"
        },
        {
            "name": "Jax",
            "gender": "Female"
        },
        {
            "name": "Kiki",
            "gender": "Female"
        },
        {
            "name": "Kitty",
            "gender": "Female"
        },
        {
            "name": "Kitten",
            "gender": "Female"
        },
        {
            "name": "Katy Purry",
            "gender": "Female"
        },
        {
            "name": "Lilly",
            "gender": "Female"
        },
        {
            "name": "Lily",
            "gender": "Female"
        },
        {
            "name": "Lola",
            "gender": "Female"
        },
        {
            "name": "Lucy",
            "gender": "Female"
        },
        {
            "name": "Luna",
            "gender": "Female"
        },
        {
            "name": "Maggie",
            "gender": "Female"
        },
        {
            "name": "Marshmallow",
            "gender": "Female"
        },
        {
            "name": "Mia",
            "gender": "Female"
        },
        {
            "name": "Millie",
            "gender": "Female"
        },
        {
            "name": "Mimi",
            "gender": "Female"
        },
        {
            "name": "Miss Kitty",
            "gender": "Female"
        },
        {
            "name": "Missy",
            "gender": "Female"
        },
        {
            "name": "Misty",
            "gender": "Female"
        },
        {
            "name": "Mochi",
            "gender": "Female"
        },
        {
            "name": "Molly",
            "gender": "Female"
        },
        {
            "name": "Muffin",
            "gender": "Female"
        },
        {
            "name": "Nala",
            "gender": "Female"
        },
        {
            "name": "Nuggest",
            "gender": "Female"
        },
        {
            "name": "Petunia",
            "gender": "Female"
        },
        {
            "name": "Patches",
            "gender": "Female"
        },
        {
            "name": "Pepper",
            "gender": "Female"
        },
        {
            "name": "Precious",
            "gender": "Female"
        },
        {
            "name": "Princess",
            "gender": "Female"
        },
        {
            "name": "Pusheen",
            "gender": "Female"
        },
        {
            "name": "Raja",
            "gender": "Female"
        },
        {
            "name": "Sadie",
            "gender": "Female"
        },
        {
            "name": "Samantha",
            "gender": "Female"
        },
        {
            "name": "Sasha",
            "gender": "Female"
        },
        {
            "name": "Sassy",
            "gender": "Female"
        },
        {
            "name": "Shadow",
            "gender": "Female"
        },
        {
            "name": "Sheba",
            "gender": "Female"
        },
        {
            "name": "Snowball",
            "gender": "Female"
        },
        {
            "name": "Snuggles",
            "gender": "Female"
        },
        {
            "name": "Sophie",
            "gender": "Female"
        },
        {
            "name": "Sugar",
            "gender": "Female"
        },
        {
            "name": "Sushi",
            "gender": "Female"
        },
        {
            "name": "Talula",
            "gender": "Female"
        },
        {
            "name": "Trixie",
            "gender": "Female"
        },
        {
            "name": "Tinkerbell",
            "gender": "Female"
        },
        {
            "name": "Whiskers",
            "gender": "Female"
        },
        {
            "name": "Willow",
            "gender": "Female"
        },
        {
            "name": "Zoe",
            "gender": "Female"
        },
        {
            "name": "Zoey",
            "gender": "Female"
        }
    ]
    const seedFemaleCats = () => CatNames.bulkCreate(femaleNames);

    module.exports = seedFemaleCats;