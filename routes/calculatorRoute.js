const express = require("express");
const router = express.Router();
// Require controller module
const calculator_controller = require("../controllers/calculatorController");


//GET request for the calculator homepage
router.get("/", calculator_controller.getIndex);

//GET request for calculated interest
// router.get("/interest/calculate", calculator_controller.interest_calculate_get);

//POST request for calculating interest
router.post("/interest/calculate", calculator_controller.postInterest);

//POST for deleting an interest
// router.post("/interest/:id/delete", calculator_controller.interest_delete_post);

//GET request for a deleted interest
// router.get("/interest/:id/delete", calculator_controller.interest_delete_get);


module.exports = router;