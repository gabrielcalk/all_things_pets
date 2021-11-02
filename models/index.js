const express = require('express');
const router = express.Router();
const Cats = require("./Cats");
const Dogs = require("./Dogs");

// User.hasMany(Post, {
//     foreignKey: "userId",
//     onDelete: "CASCADE"
// });

// Post.belongsTo(User, {
//     foreignKey: "userId"
// });

module.exports = { Cats, Dogs };
