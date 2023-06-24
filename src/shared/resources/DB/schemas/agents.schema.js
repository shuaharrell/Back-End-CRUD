
const mongoose = require('mongoose')

const AgentSchema = new mongoose.Schema({
  first_name: {
    type: String,
    trim: true,
    // required: true
  },
  last_name: {
    type: String,
    trim: true,
    // required: true
  },
  email: {
    type: String,
    trim: true,
    // required: true
  },
  region: {
    type: String,
    enum: ['north' , 'south' , 'east' , 'west'],
    // required: true
  },
  rating: {
    type: Number,
    min: 0 ,
    max: 100
  },
  fee: {
    type: Number,
    // required: true
  },
  sales: {
    type: Number,
    // required: true,
    default: 0,
    min: 0
  },
  
  
},{timestamps: true});

module.exports = mongoose.model('Agents', AgentSchema)





