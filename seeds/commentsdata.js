const { Comments } = require('../models');

const commentData = [
  {
    article_id: 1,
    comment: 'I agree! I hate this issue.',
    comment_date: '09/30/2023',
    comment_user_id: 1
  },
];

const seedCommentData = () => Comments.bulkCreate(commentData);

module.exports = seedCommentData;