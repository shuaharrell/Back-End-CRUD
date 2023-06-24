
const Region = require('../src/shared/resources/DB/schemas/regions.schema')
const Agent = require('../src/shared/resources/DB/schemas/agents.schema')


const regionCreate = async (req,res) =>{
    try {
        const region = await Region.create(req.body)
        res.status(201).json({msg: 'Region Created', data: region})
    } catch (error) {
        console.log(error)
     res.status(500).json({msg: 'Error'});
    }
 
 }

 const returnRegion = async (req, res) => {
    
    try {
        const returnRegion = await Region.find({region: req.query.region});
        res.send(returnRegion);
    } catch (error) {
        res.status(500).json({msg: 'Error: Please select a valid region.'});
    }
  };

  
    const allStars = async(req, res) => {
        try{
            const findRegionNorth = await Region.find({region: "north"})
            const findRegionSouth = await Region.find({region : "south" })
            const findRegionEast = await Region.find({region: "east" })
          
        res.status(200).json({msg: 'Here is our ALL STARS', top_agent_north : findRegionNorth[0].top_agents[0], top_agent_south : findRegionSouth[0].top_agents[0], top_agent_east : findRegionEast[0].top_agents[0]})
        } catch (error){
            res.status(500).json({msg:'ERROR'})
            console.log(error)
        }
      };






 module.exports = {regionCreate, allStars, returnRegion}










   // try {
    //     const agent = await Region.find({ region: req.params.region})
        
    //     const agentSales = agent[0].top_agents
    //     console.log(agentSales)
    //     return agentSales[0]
     
    // } catch (error) {
    //     // console.log(error)
    //     res.status(500).send(error);
    // }
