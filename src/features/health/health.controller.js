require('dotenv').config()

const helloWorld = async(req, res) => {
  res.send('Hello World!!');
};


const status = async(req, res, next) => {
  
  res.status(200).send(`Server is running in ${process.env.STATUS} mode on port ${process.env.PORT}`)

}

const error = async(req, res, next) => {

  res.status(400).send('Error 400 Bad Request')

}

module.exports = {helloWorld, status, error};

