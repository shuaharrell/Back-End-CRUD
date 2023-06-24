const agent = require('../../../agents.json')

//////////////////////////////////////////////////////
///Email List
//////////////////////////////////////////////////////


const emailList = (req, res) => {
   
    let result = ''
    agent.forEach(e => {
        result += `${e.email}, `
    
    })
    result = result.slice(0, -1)
res.status(200).send(result.slice(0,-1))
}

//////////////////////////////////////////////////////
///Region Average
//////////////////////////////////////////////////////

const regions = ['north', 'south', 'east', 'west']


const averages = (region) => {
    const regLowCase = region.toLowerCase()
    if (!regions.includes(regLowCase)) {
        return {
            error: `${region} not recognized. Region must be either north, south, east or west.`
        }
    }
    total = 0
    totalRating = 0
    totalFee = 0
    agent.forEach(e => {
        if (regLowCase === e.region) {
            total++
            totalRating += Number(e.rating)
            totalFee += Number(e.fee)
        }
    })
    if (total > 0) {
        return {
            regions: region,
            avgRating: (totalRating / total).toFixed(2),
            avgFee: (totalFee / total).toFixed(2)
        }
    } else {
        return {
            msg: `No agents found for the ${region} region`
        }
    }
}

const regionAvg = (req, res) => {
    if (!req.query.region) {
        res.status(400)
        return res.send({
            error: 'You must provide a valid region'
        })
    } else {
        result = averages(req.query.region)
        if (result.error) {
            res.status(400).send(result)
        } else {
            res.status(200).send(result)
        }
    }
 
}


module.exports = {emailList, regionAvg}