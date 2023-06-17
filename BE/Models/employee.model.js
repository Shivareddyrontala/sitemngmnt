const mongoose = require('mongoose');

const Employee = new mongoose.Schema(
    {
        name : {type : String , required : true,unique: true},
        number : {type : String , required : true},
        age : {type : String , required : true}
    },
    {collection: 'employee-data'}
);

const model = mongoose.model('EmployeeData',Employee);

module.exports = model;