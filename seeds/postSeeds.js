const { Comment } = require('../models');

const postData = [{
    title: 'HTML',
    content: 'HTML is the foundation',
    user_id: 1
},
{
    title: 'CSS',
    content: 'CSS is fun',
    user_id: 2
},
{
    title: 'Javscript',
    content: 'Javascript is life',
    user_id: 3
}];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;