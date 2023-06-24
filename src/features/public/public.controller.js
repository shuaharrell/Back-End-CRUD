require('dotenv').config()


////////////////////////////////////////////
// Variables
////////////////////////////////////////////


const standardPrice = 8000
const premiumPrice = 12000
const exceliumPrice = 15000
const installationStandard = .1
const installationPremium = .15
const installationExcelium = .20



////////////////////////////////////////////
// Calculate Residential
////////////////////////////////////////////



 const residentialMath = (req, res,) => {

    const numFloors = parseInt(req.query.numFloors)
    const numApartments = parseInt(req.query.numApartments)
    if (!numFloors) {
        return res.status(400).send({
            error: 'Floor amount must be an interger greater than 0.'
        })
    }
    if (!numApartments) {
        return res.status(400).send({
            error: 'Apartments amount must be an interger greater than 0.'
        })
    }
   
    if(!req.query.tier){
        return res.status(400).send('Please select a valid tier')
    }

    if(!req.query.numApartments){
        return res.status(400).send('Please specify a number of apartments')
    }

    if(!req.query.numFloors){
        return res.status(400).send('Please specify a number of floors')
    }



    const {tier} = req.query
    let avgAptPerFloor = Math.ceil((numApartments) / (numFloors))
    let elevator1 = Math.ceil(avgAptPerFloor / 6)
    let elevatorBank1 = Math.ceil(numFloors / 20)
    let returnAmountElevators = (elevator1) * (elevatorBank1)
    let finalPrice = 0
    

   

        if(tier === 'standard'){
            finalPrice = (standardPrice + (standardPrice * installationStandard)) * returnAmountElevators
        }else if (tier === 'premium'){
            finalPrice =(premiumPrice + (premiumPrice * installationPremium)) * returnAmountElevators
        }else if (tier === 'excelium'){
            finalPrice = (exceliumPrice + (exceliumPrice * installationExcelium)) * returnAmountElevators
        } 
        console.log(finalPrice)
       return res.status(200).send(`Amount of elevators: ${returnAmountElevators}  Final price: ${finalPrice}`)
 }



 ////////////////////////////////////////////
// Contact Us
////////////////////////////////////////////

const contactUs = (req,res, next) =>{
    const {firstName, lastName, message} = req.body
    res.status(201).send(`Thank you ${firstName} ${lastName} for sending us your message ${message}`)
    console.log({firstName, lastName, message})
}






module.exports = {residentialMath, contactUs}