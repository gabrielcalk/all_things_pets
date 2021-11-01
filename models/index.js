const User = require("./Cats");
const Post = require("./Dogs");

User.hasMany(Post, {
    foreignKey: "userId",
    onDelete: "CASCADE"
});

Post.belongsTo(User, {
    foreignKey: "userId"
});

module.exports = { Cats, Dogs };