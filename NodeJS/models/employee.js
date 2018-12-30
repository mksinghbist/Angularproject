const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    name: { type: String },
    position: { type: String },
	dobdate :{type:String},
	date:     {type: String},
    office: { type: String },
    salary: { type: Number }
});

module.exports = { Employee };