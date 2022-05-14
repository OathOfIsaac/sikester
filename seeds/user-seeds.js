const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'gothprincess',
    email: 'xxdarknessxx@aol.com',
    password: 'rapunzel1997'
  },
  {
    username: 'MCR4evaa',
    email: 'Ilovegerardway@gmail.com',
    password: 'blackparade7'
  },
  {
    username: 'horseGORL',
    email: 'countrymatters@yahoo.com',
    password: 'YeeHaCountry'
  },
  {
    username: 'QueenCEO',
    email: 'electricdaisycarnival@ceo.com',
    password: 'corporaTeTake0ver'
  },
  {
    username: 'jungkook stan',
    email: ' kpopprince@gmail.com',
    password: 'southkoreabestkorea'
  },
  {
    username: 'CYB3R_R4V3R',
    email: 'AIRraverchibi@msn.com',
    password:'h4CK3R-F357'
  },
  {
    username: 'Anime_Is_Trash_And_So_Am_I',
    email: 'JapanEndingAndOP@line.net',
    password:'PickaCHU1995!'
  },
  {
    username: 'OldJazzSoul',
    email: 'rnbblues65@aol.com',
    password:'DogFromUp1234'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;