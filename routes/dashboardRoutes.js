const router = require('express').Router();
const { Articles } = require('../models');
const withAuth = require('../utils/auth');

// router.post('/dashboard', withAuth, async (req, res) => {
//   try {
//     const createArticle = await Articles.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });
//     res.status(200).json(createArticle);
//   } catch(err) {
//     res.status(400).json(err);
//   }
// });

// where   req.session.user_id
// Dashboard find User articles (if ANY)
router.get('./dashboard', withAuth, async (req, res) => {
  try {
    const findUserArticles = await Articles.findAll({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    const userArticles = findUserArticles.get({ plain: true });
    res.render('dashboard-page', {
      userArticles,
      logged_in: true
    });
  } catch(err) {
    res.status(400).json(err);
  }
});

module.exports = router;