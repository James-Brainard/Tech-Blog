const { Comments } = require('../models');

const commentData = [
  {
    article_id: 1,
    comment: 'I agree! I hate this issue.',
    comment_date: 'September 29, 2021 08:30:00',
    comment_user_id: 1
  },
];

const seedCommentData = () => Comments.bulkCreate(commentData);

module.exports = seedCommentData;