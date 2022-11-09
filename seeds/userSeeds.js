const { Comment } = require('../models');

const userData = [
    {
        username: 'Jack',
        password: 'Jwjm'
    },
    {
        username: 'John',
        password: 'Jjm'
    },
    {
        username: 'Jill',
        password: 'Jam'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;