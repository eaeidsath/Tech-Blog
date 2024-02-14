const { Post } = require('../models');

const postData = [
    {
      "title": "Looking for Volcano",
      "post_body": "Anyone know how to get to a volcano, need to throw something inside.",
      "user_id": 1
    },
    {
      "title": "Hungry",
      "post_body": "Please send food, haven't eaten since second breakfast.",
      "user_id": 2
    },
    {
      "title": "A history of Frodo",
      "post_body": "Frodo is introduced in The Lord of the Rings as Bilbo Baggins's cousin and adoptive heir. Frodo's parents Drogo Baggins and Primula Brandybuck had been killed in a boating accident when Frodo was twelve; Frodo spent the next nine years living with his maternal family, the Brandybucks in Brandy Hall. At the age of twenty-one he was adopted by Bilbo, who brought him to live at his home, Bag End. He and Bilbo shared the same birthday, the 22nd of September. Bilbo introduced Frodo to the Elvish languages, and they often went on long walking trips together.",
      "user_id": 3
    }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;