// Initial dependencies and definitions
require('dotenv').config();
const Express = require('express');
const app = Express();
const port = process.env.PORT || 3004;

// Import routes
const HealthRoutes = require('./src/routes/health.routes');
const AdminRoutes = require('./src/routes/admin.routes')
const PublicRoutes = require('./src/routes/public.routes')
const AgentRoutes = require('./src/routes/agents.route')
const RegionRoutes  = require('./src/routes/region.routes');
const Logger = require('../Back-End-CRUD/logger')

app.use(Express.json());
//use routes

HealthRoutes.registerHealthRoutes(app);
AdminRoutes.registerAdminRoutes(app)
PublicRoutes.registerPublicRoutes(app)
AgentRoutes.registerAgentRoutes(app)
RegionRoutes.registerRegionRoutes(app);


const MongoManager = require('./mongo-manager');
MongoManager.openMongoConnection();






app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})


