
const Agent = require('../../shared/resources/DB/schemas/agents.schema')
const {filterUpdates} = require('../../../utilities')


const agentCreate = async (req,res) =>{
   try {
    const agent = await Agent.create(req.body)
    res.status(201).json({msg: 'Agent Created', data: agent})
   } catch (error) {
    res.status(500).send('Error: Unable to process request.');
   }

}

const returnAgent = async (req, res) => {
    
  
    try {
      const agentReturn = await Agent.find({}).sort({'last_name' : 1});
      res.send(agentReturn);
    } catch (error) {
      res.status(500).send('Error: Unable to process request.');
    }
  };


  const agentByRegion = async(req, res) => {
   
    try {
        const returnByRegion = await Agent.find({region: req.query.region}).sort({'rating' : -1});
        res.send(returnByRegion);
    } catch (error) {
        res.status(404).send('Error: Please select a valid region.');
    }
 
}


  const agentUpdate = async (req, res) => {
    try {
        const allowed = filterUpdates(req.body)
  
        const agent = await Agent.findByIdAndUpdate(
            { _id: req.params.id },
            allowed,
            { new: true, upsert: false })
        if (agent) {
            res.status(200).json({ data: agent })
        }
        else {
            res.status(404).json({ err: `No information found for ID: ${req.params.id}` })
        }
    } catch (err) {
        console.error(err)
        res.status(404).send({ error: err })
    }
    
}


const agentDelete = async (req, res) => {
    try {
        const deleteAgent = await Agent.findByIdAndDelete(req.params.id);
    
        if (!deleteAgent) res.status(404).send("No agent found");
        res.status(200).send('Agent deleted');
      } catch (error) {
        res.status(404).send(error);
      }

}

const topAgentsAndSales = async (req, res) => {
    try {
        const agent = await Agent.find({ region: req.params.region})
        const agentSales = agent.sort((a, b) => (a.sales > b.sales) ? -1 : 1)
        const sales = agent.reduce((acc, curr) => acc + curr.sales, 0)
        res.json({agents: agentSales, sales_sum: sales})

    } catch (error) {
        res.json({ msg: 'error' })
    }
}




module.exports = {agentCreate, returnAgent, agentByRegion, agentUpdate, agentDelete, topAgentsAndSales}