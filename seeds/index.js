const sequelize = require('../config/connections');
const seedFemaleDogs = require('./female_dogs_name');
const seedMaleDogs = require('./male_dogs_name');
const seedFemaleCats = require('./female_cat_names');
const seedMaleCats = require('./male_cat_names');
const seedDogBreeds = require('./dogbreeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedFemaleDogs();

  await seedMaleDogs();

  await seedFemaleCats();

  await seedMaleCats();

  await seedDogBreeds();

  process.exit(0);
};

seedAll();
