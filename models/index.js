const express = require('express');
const router = express.Router();
const Cats = require("./Cats");
const Dogs = require("./Dogs");
const dognames = require("./dognames")
const catnames = require("./catnames")
const dogfacts = require("./dogfacts")
// User.hasMany(Post, {
//     foreignKey: "userId",
//     onDelete: "CASCADE"
// });

// Post.belongsTo(User, {
//     foreignKey: "userId"
// });

module.exports = { Cats, Dogs };
