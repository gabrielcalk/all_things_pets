const express = require('express');
const router = express.Router();
const Cats = require("./Cats");
const Dogs = require("./Dogs");
<<<<<<< HEAD

// User.hasMany(Post, {
//     foreignKey: "userId",
//     onDelete: "CASCADE"
// });

// Post.belongsTo(User, {
//     foreignKey: "userId"
// });

=======
const dognames = require("./dognames")
const catnames = require("./catnames")
// User.hasMany(Post, {
//     foreignKey: "userId",
//     onDelete: "CASCADE"
// });

// Post.belongsTo(User, {
//     foreignKey: "userId"
// });

>>>>>>> 138d63f2928308b84ee86c3646586db869ba177d
module.exports = { Cats, Dogs };
