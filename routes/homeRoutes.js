const router = require('express').Router();
const { User, Articles, Comments } = require('../models');
const withAuth = require('../utils/auth');

// Home Routes for displaying articles on site
// Get articles for Home Page
router.get('/', async (req, res) => {
  try {
    const getArticles = await Articles.findAll()
      const articlesList = getArticles.map((articles) => articles.get({ plain: true })
      );
      res.render('homepage', {
        articlesList
      })
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get one article
router.get('/articles/:id', withAuth, async (req, res) => {
  try {
    const getArticles = await Articles.findByPk(req.params.id, {
      include: [
        {
          model: Comments,
          include: [
            {
              model: User,
              attributes: [
                'user_name'
              ]
            }
          ]
        }
      ]
    });
    const grabArticles = getArticles.get({ plain: true });
    res.render('articles-page', {
      grabArticles, loggedIn: true
    })
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;