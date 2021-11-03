const DogsNames = require('../models/dognames')

const femaleNames = [
    {
        name: "Bella ",
        type: "female"
    },
    {
        name: "Lucy ",
        type: "female"
    },
    {
        name: "Daisy ",
        type: "female"
    },
    {
        name: "Molly ",
        type: "female"
    },
    {
        name: "Lola ",
        type: "female"
    },
    {
        name: "Sophie ",
        type: "female"
    },
    {
        name: "Sadie ",
        type: "female"
    },
    {
        name: "Maggie ",
        type: "female"
    },
    {
        name: "Chloe ",
        type: "female"
    },
    {
        name: "Bailey ",
        type: "female"
    },
    {
        name: "Roxy ",
        type: "female"
    },
    {
        name: "Zoey ",
        type: "female"
    },
    {
        name: "Lily ",
        type: "female"
    },
    {
        name: "Luna ",
        type: "female"
    },
    {
        name: "Coco ",
        type: "female"
    },
    {
        name: "Stella ",
        type: "female"
    },
    {
        name: "Gracie ",
        type: "female"
    },
    {
        name: "Abby ",
        type: "female"
    },
    {
        name: "Penny ",
        type: "female"
    },
    {
        name: "Zoe ",
        type: "female"
    },
    {
        name: "Ginger ",
        type: "female"
    },
    {
        name: "Ruby ",
        type: "female"
    },
    {
        name: "Rosie ",
        type: "female"
    },
    {
        name: "Lilly ",
        type: "female"
    },
    {
        name: "Ellie ",
        type: "female"
    },
    {
        name: "Mia ",
        type: "female"
    },
    {
        name: "Sasha ",
        type: "female"
    },
    {
        name: "Lulu ",
        type: "female"
    },
    {
        name: "Pepper ",
        type: "female"
    },
    {
        name: "Nala ",
        type: "female"
    },
    {
        name: "Lexi ",
        type: "female"
    },
    {
        name: "Lady ",
        type: "female"
    },
    {
        name: "Emma ",
        type: "female"
    },
    {
        name: "Riley ",
        type: "female"
    },
    {
        name: "Dixie ",
        type: "female"
    },
    {
        name: "Annie ",
        type: "female"
    },
    {
        name: "Maddie ",
        type: "female"
    },
    {
        name: "Piper ",
        type: "female"
    },
    {
        name: "Princess ",
        type: "female"
    },
    {
        name: "Izzy ",
        type: "female"
    },
    {
        name: "Maya ",
        type: "female"
    },
    {
        name: "Olive ",
        type: "female"
    },
    {
        name: "Cookie ",
        type: "female"
    },
    {
        name: "Roxie ",
        type: "female"
    },
    {
        name: "Angel ",
        type: "female"
    },
    {
        name: "Belle ",
        type: "female"
    },
    {
        name: "Layla ",
        type: "female"
    },
    {
        name: "Missy ",
        type: "female"
    },
    {
        name: "Cali ",
        type: "female"
    },
    {
        name: "Honey ",
        type: "female"
    },
    {
        name: "Millie ",
        type: "female"
    },
    {
        name: "Harley ",
        type: "female"
    },
    {
        name: "Marley ",
        type: "female"
    },
    {
        name: "Holly ",
        type: "female"
    },
    {
        name: "Kona ",
        type: "female"
    },
    {
        name: "Shelby ",
        type: "female"
    },
    {
        name: "Jasmine ",
        type: "female"
    },
    {
        name: "Ella ",
        type: "female"
    },
    {
        name: "Charlie ",
        type: "female"
    },
    {
        name: "Minnie ",
        type: "female"
    },
    {
        name: "Willow ",
        type: "female"
    },
    {
        name: "Phoebe ",
        type: "female"
    },
    {
        name: "Callie ",
        type: "female"
    },
    {
        name: "Scout ",
        type: "female"
    },
    {
        name: "Katie ",
        type: "female"
    },
    {
        name: "Dakota ",
        type: "female"
    },
    {
        name: "Sugar ",
        type: "female"
    },
    {
        name: "Sandy ",
        type: "female"
    },
    {
        name: "Josie ",
        type: "female"
    },
    {
        name: "Macy ",
        type: "female"
    },
    {
        name: "Trixie ",
        type: "female"
    },
    {
        name: "Winnie ",
        type: "female"
    },
    {
        name: "Peanut ",
        type: "female"
    },
    {
        name: "Mimi ",
        type: "female"
    },
    {
        name: "Hazel ",
        type: "female"
    },
    {
        name: "Mocha ",
        type: "female"
    },
    {
        name: "Cleo ",
        type: "female"
    },
    {
        name: "Hannah ",
        type: "female"
    },
    {
        name: "Athena ",
        type: "female"
    },
    {
        name: "Lacey ",
        type: "female"
    },
    {
        name: "Sassy ",
        type: "female"
    },
    {
        name: "Lucky ",
        type: "female"
    },
    {
        name: "Bonnie ",
        type: "female"
    },
    {
        name: "Allie ",
        type: "female"
    },
    {
        name: "Brandy ",
        type: "female"
    },
    {
        name: "Sydney ",
        type: "female"
    },
    {
        name: "Casey ",
        type: "female"
    },
    {
        name: "Gigi ",
        type: "female"
    },
    {
        name: "Baby ",
        type: "female"
    },
    {
        name: "Madison ",
        type: "female"
    },
    {
        name: "Heidi ",
        type: "female"
    },
    {
        name: "Sally ",
        type: "female"
    },
    {
        name: "Shadow ",
        type: "female"
    },
    {
        name: "Cocoa ",
        type: "female"
    },
    {
        name: "Pebbles ",
        type: "female"
    },
    {
        name: "Misty ",
        type: "female"
    },
    {
        name: "Nikki ",
        type: "female"
    },
    {
        name: "Lexie ",
        type: "female"
    },
    {
        name: "Grace ",
        type: "female"
    },
    {
        name: "Sierra",
        type: "female"
    }
]

const seedFemaleDogs = () => DogsNames.bulkCreate(femaleNames);

module.exports = seedFemaleDogs;