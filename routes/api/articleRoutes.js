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
})

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
    // Need to get articles but not sure if above is correct
  } catch(err) {
    res.status(400).json(err);
  }
});


// Delete previous articles
router.delete('/articles:id', withAuth, async (req, res) => {
  try{

  } catch(err) {
    res.status(500).json(err);
  }
});