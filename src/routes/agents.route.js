const AgentController = require('../features/agents/agents.controller')


const registerAgentRoutes = (app) => {

    
    app.post('/agent-create', AgentController.agentCreate)
    app.get('/agents',  AgentController.returnAgent)
    app.get('/agents-by-region', AgentController.agentByRegion)
    app.patch('/agent-update-info/:id',  AgentController.agentUpdate)
    app.delete('/agent-delete/:id',  AgentController.agentDelete)
    app.get('/agentSales/:region',  AgentController.topAgentsAndSales)

}

// function isAuth(req, res, next) {
//     const auth = req.headers.authorization;
//     if (auth === 'Rocket') {
//       next();
//     } else {
//       res.status(401);
//       res.send('Access forbidden');
//     }
// }



module.exports = {registerAgentRoutes}