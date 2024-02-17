const router = require('express').Router();
const { Comment, Post } = require('../../models');
const getPostID = require('./postRoutes');

/* router.post('/new', async (req, res) => {
  // create a new comment
  try {
    const getPostID = Post.findByPk(req.params.id);
    const newComment = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
        post_id: getPostID
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
}); */

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
        /* post_id: req.params.id */
      }
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;