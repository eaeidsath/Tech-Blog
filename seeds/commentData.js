const { Comment } = require('../models');

const commentData = [
  {
    "comment_body": "I know a guy named Strider who can take you there, check DM.",
    "date_created": "November 30, 2016",
    "user_id": 3,
    "post_id": 1
  },
  {
    "comment_body": "That's terrible, I'll be over with a roast and a couple potatoes ASAP.",
    "date_created": "November 30, 2016",
    "user_id": 1,
    "post_id": 2
  },
  {
    "comment_body": "Oh my God he sounds like a hunk.",
    "date_created": "November 30, 2016",
    "user_id": 2,
    "post_id": 3
  }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;