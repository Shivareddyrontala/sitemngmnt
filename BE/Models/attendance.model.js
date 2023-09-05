const mongoose = require('mongoose');

const EmployeeAttendance = new mongoose.Schema(
    {
        username : {type : String , required : true},
        timein : {type : String},
        timeout : {type : String},
        date : {type : Date},
        totalhrs : {type : Number} 
    },
    {collection: 'employee-attendance'}
);

const model = mongoose.model('EmployeeAttendanceData',EmployeeAttendance);

module.exports = model;