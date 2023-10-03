// Sign up and Sign in
const router = require('express').Router();
const { User } = require('../../models');


// Register User
router.post('/', async (req, res) => {
  try {
    const userInfo = await User.create({
      user_name: req.body.username,
      email: req.body.email,
      password: req.body.password
    });


    req.session.save(() => {
      req.session.user_id = userInfo.id;
      req.session.username = userInfo.user_name;
      req.session.logged_in = true;

      res.status(200).json(userInfo);
    })
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

// Post Login - Find where email: is the req.body.email
router.post('/login', async (req, res) => {
  try {
    const userInfo = await User.findOne({ where: { email: req.body.email} });
    console.log(User.req.body);

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

      res.status(200).json(userInfo);
      // res.json({ user: userInfo, message: 'You are logged in!' });
    });
  } catch (err) {
    res.status(400).json(err)
  }
});

router.delete('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(404).end();
    });
  } else {
    res.status(400).end();
  }
});

module.exports = router;