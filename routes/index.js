const router = require('express').Router();

// HomeRoutes for after signing up etc
// Dashboard Routes for clicking dashboard in nav


// Your dashboard after clicking dashboard
const apiRoutes = require('./api');
// homeroutes will redirect user after signing In or signing up to the home route.
// Gets everything - log in/sign up 
// homepage / article / param:id

// Home Routes redirect user after signing in or signing up to home route. - or clicking home
// Which will display the Home Page of your dashboard - router.get LOGIN

// Dashboard routes for dashboard button?

// Comment Routes?

// Blog routes? - creation / deletion


const homeRoutes = require('./homeRoutes'); 
const dashboardRoutes = require('./dashboardRoutes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes)
router.use('/api', apiRoutes);