const AdminController = require('../features/admin/admin.controller');

const registerAdminRoutes = (app) => {
  app.get('/email-list', AdminController.emailList);
  app.get('/region-avg', AdminController.regionAvg)
}


module.exports = {registerAdminRoutes};