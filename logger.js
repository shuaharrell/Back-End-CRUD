const createLog = (req, res, next) => {
    let current_datetime = new Date();
  let formatted_date =
    current_datetime.getFullYear() +
    "-" +
    (current_datetime.getMonth() + 1) +
    "-" +
    current_datetime.getDate() +
    " " +
    current_datetime.getHours() +
    ":" +
    current_datetime.getMinutes() +
    ":" +
    current_datetime.getSeconds();
 
    console.log(log);
    res.on("finish", function() {
      console.log(req.method, decodeURI(req.url), res.statusCode, res.statusMessage, `${formatted_date}`);
    });
    next();
  };



  module.exports = {createLog}