// Sign up and Sign in
const router = require('express').Router();
const { User } = require('../models');


// Route for Login
router.get('/', async (req, res) => {
  try {

    const userInfo = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userInfo.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    })
  } catch (err) {
    res.status(400).json(err);
  }
});

// Post Login - Find where email: is the req.body.email

router.post('/login', async (req, res) => {
  try {
    const userInfo = await User.findOne({ where: { email: req.body.email} });

    if (!userInfo) {
      res.status(400).json({ message: 'Incorrect email or password, please try again!'});
      return;
    }
    const validatePw = await userInfo.checkPassword(req.body.password);

    if (!validatePw) {
      res.status(400).json({ message: 'Incorrect email or password, please try again!'});
      return;
    }
    req.session.save(() => {
      req.session.user_id = userInfo.id;
      req.session.logged_in = true;

      res.json({ user: userInfo, message: 'You are logged in!' });
    });
  } catch (err) {
    res.status(400).json(err)
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(404).end();
    });
  } else {
    res.status(400).end();
  }
})

module.exports = router;