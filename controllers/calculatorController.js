var calculatorSchema = require("../models/calculatorSchema");

//Piggyvest calculator homepage
exports.getIndex = (req, res)=> {
    res.render("../views/index", {
        Title: "Welcome to Co-op Lend"
      });
};


//List of all calculated interest
// exports.calculatorSchema_get = function(req, res) {
//     res.send("Lists Of All Interest");
// };


//Calculate interest
exports.postInterest = (req, res)=> {
    //waiting on the form fields name to know what we are sending to db
};

//Deleted ineterest
// exports.calculatorSchema_delete = function(req, res) {
//     res.send("Interest Deleted");
// };