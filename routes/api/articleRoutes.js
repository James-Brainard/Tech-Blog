const router = require('express').Router();
const { Articles } = require('../../models');
const withAuth = require('../../utils/auth');

// Post aka Create new Article/blog
router.post('/', withAuth, async (req, res) => {
  try{
    const newArticle = await Articles.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newArticle);
  } catch(err) {
    res.status(400).json(err);
  }
});

// Update previous articles
router.put('/:id', withAuth, async (req, res) => {
  try{
    const updateArticle = await Articles.update(req.params.id, {
      include: [
        {
          model: User,
          attributes: [
            'user_name'
          ]
        }
      ]
    });
    // Need to finish update articles above but not sure if above is correct
    // NEED to UPDATE Articles COMMENTS MAYBE HERE OR ANOTHER ROUTER
  } catch(err) {
    res.status(400).json(err);
  }
});



// Post comment


// Delete comment


// Delete selected article
router.delete('/articles:id', withAuth, async (req, res) => {
  try{
    const articleDelete = await Articles.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      },
    });

    if (!articleDelete) {
      res.status(400).json({ message: 'No blog found with this id.'});
      return;
    }
  } catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;