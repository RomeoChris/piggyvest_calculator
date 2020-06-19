const mongoose = require("mongoose");
const Joi = require("joi");


const calculatorSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },

    investment: {
        type: Number,
        required: true,
    },

    interest: {
        type: Number,
        required: true
    },

    date: {
        type: Date,
        default: Date.now()
    }
}, {timestamps: true});


const Calculator = mongoose.model("Calculator", calculatorSchema);

function validateCalculator(calculator) {
    const schema = {
        amount: Joi.number().required(),
        investment: Joi.number().required(),
        interest: Joi.number().required()
    };
    return Joi.validate(calculator, schema);
}


exports.Calculator = Calculator;
exports.validate = validateCalculator;


/*
module.exports = mongoose.model("Interest", calculatorSchema);


const Schema = mongoose.Schema;
const calculatorSchema = new Schema({

*/