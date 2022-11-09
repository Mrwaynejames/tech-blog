const { Comment } = require('../models');

const commentData = [{
        comment_text: "Learning to code is very hard",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Leaning to code in 12 weeks is even harder",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Learning to code in 12 weeks while keeping a job is insane",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;