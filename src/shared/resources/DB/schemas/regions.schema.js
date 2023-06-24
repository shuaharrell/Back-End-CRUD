const mongoose = require('mongoose')

const Agent = require('../schemas/agents.schema')

const RegionSchema = new mongoose.Schema({

    region: {
        type: String,
        enum: ['north' , 'south' , 'east' , 'west'],
        trim: true,
        // required: true,
        // validate: {
        //     validator: function(v){
        //         return this.model('Region').findOne({ region: v }).then(region => !region)
        //     },
        //     message: props => `${props.value} region already exists`
        // },
      },
    
    address: {
        type: String,
        trim: true,
        
    },

    total_sales: {
        type: Number,
        min: 0
    },

    manager: {
        type: [Agent.schema],
        
    },

    top_agents: {
        type: [Agent.schema],
        
    }


})



module.exports = mongoose.model('Region', RegionSchema)