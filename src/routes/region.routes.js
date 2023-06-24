const RegionController = require ('../../region/region.controller')


const registerRegionRoutes = (app) => {

    app.post('/region-create', isAuth, RegionController.regionCreate)
    app.get('/all-stars', isAuth,  RegionController.allStars)
    app.get('/region', isAuth, RegionController.returnRegion)




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



module.exports = {registerRegionRoutes}