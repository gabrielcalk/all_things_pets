const sequelize = require('../config/connections');
const seedFemaleDogs = require('./female_dogs_name');
const seedMaleDogs = require('./male_dogs_name');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedFemaleDogs();

  await seedMaleDogs();

  process.exit(0);
};

seedAll();
