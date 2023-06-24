const PublicController = require('../features/public/public.controller')


const registerPublicRoutes = (app) => {

    app.get('/calc-residential', isAuth, PublicController.residentialMath)
    app.post('/contact-us', isAuth, PublicController.contactUs)
}


function isAuth(req, res, next) {
    const auth = req.headers.authorization;
    if (auth === 'Rocket') {
      next();
    } else {
      res.status(401);
      res.send('Access forbidden');
    }
}





module.exports = {registerPublicRoutes}