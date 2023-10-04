const router = require('express').Router();
const { Articles } = require('../models');
const withAuth = require('../utils/auth');



// where   req.session.user_id
// Dashboard find User articles (if ANY)
router.get('/', withAuth, async (req, res) => {
  try {
    const findUserArticles = await Articles.findAll({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    const userArticles = findUserArticles.get({ plain: true });
    return res.render('dashboard-page', {
      userArticles,
      logged_in: true
    });
  } catch(err) {
    res.status(400).json(err);
  }
});

// edit article
router.get('/:id', withAuth, async (req, res) => {
  try {
    const editArticle = Articles.update();
    const editBlog = editArticle.get({ plain: true });
    
  } catch(err) {
    res.status(400).json(err);
  }
});

// add comment

module.exports = router;