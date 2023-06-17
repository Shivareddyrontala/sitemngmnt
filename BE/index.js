const express = require('express');
const app = express()
const cors = require('cors');
const mongoose  = require('mongoose');
const jwt = require('jsonwebtoken');
// Models
const User = require('./Models/user.model');
const Employee = require('./Models/employee.model');
const EmployeeAttendance = require('./Models/attendance.model');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/site-management')

// Routes
// User Routes
app.post('/api/register',async(req,res) => {
    console.log(req.body);
    try{
       const user = await User.create({
           name : req.body.name,
           email : req.body.email,
           password : req.body.password
       });
       res.json({ status: 'ok'}) 
    }
    catch(error){
        res.json({status : 'error', error : error})
    }
    
});

app.post('/api/login',async(req,res) => {
    const user = await User.findOne({
        email : req.body.data.email,
        password : req.body.data.password
    });
  
    if(user){
        const token = jwt.sign(
            {
                name: user.name,
                email: user.email
            },'secret123');
            res.json({ status: 'ok',user : token,name : user.name});
    }
    else{
        res.json({status : 'error', error : 'Invalid Credentials'})
    }
    
});
// Employee Routes
app.post('/api/employee/register',async(req,res) => {
    console.log(req.body.data,"data");
    try{
       const employee = await Employee.create({
           name : req.body.data.name,
           number : req.body.data.number,
           age : req.body.data.age
       });
       res.json({ status: 'ok',msg:'Successfully added employee',info: req.body}) 
    }
    catch(error){
        console.log(error)
        res.json({status : 'error', msg : error})
    }
    
});

app.get('/api/employees',async(req,res) => {
    const employees = await Employee.find();
    console.log(employees,"employee ==>")
    if(employees){
        res.json({ status: 'ok',msg:'Success',employeeData: employees}) 
    }
    else{
        res.json({ status: 'Error',msg:'Unable To Fetch Records',employeeData: []});
    }
});

// Attendance Routes
app.post('/api/employee/attendance',async(req,res) => {
  
    const existing_data = await EmployeeAttendance.findOne({
        username : req.body.username,
        date : req.body.date
    });
    console.log(existing_data,"existing_data ==>");
    res.json({mg : existing_data});
    return;
    if(!existing_data){
        try{
            const attendance = await EmployeeAttendance.create({
                username : req.body.username,
                timein : req.body.timein,
                timeout : req.body.timeout,
                date : req.body.date
            });
            res.json({ status: 'ok',msg:'Successfully added employee',info: req.body}) 
        }
        catch(error){
            console.log(error)
            res.json({status : 'error', msg : error})
        }
    }
    
});


app.listen(8000,() =>  console.log("server started"));