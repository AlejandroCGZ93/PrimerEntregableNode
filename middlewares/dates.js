function myDate(req, res, next) {
    req.date = new Date();
    next();
}

function today(req, res, next) {
    let today = req.date;
    req.today = today.getDay();
    next();
}

function month(req, res, next) {
    let today = req.date;
    req.month = today.getMonth();
    next();
    
}

function year(req, res, next){
    let today = req.date;
    req.year = today.getYear();
    next();
}


function displayDate (req, res, next){
    console.log(`Hoy es ${today} del mes ${month} del ${year}`);
    next()
}

let dates = {
    myDate,
    today,
    month,
    year,
    displayDate
}


// const dates = function (req, _res, next) {
//     console.log(`<<< Consulta realizada: ${new Date().toLocaleString()} ${req.method} ${req.url} >>>`)
//     next()
//   }
//   //error status 404
  
//   module.exports = dates;

module.exports = dates