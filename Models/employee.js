const mongoose=require('mongoose');
const EmployeeSchema=new mongoose.Schema({
    employee_name:{
        type:String,
        required:true
    },
    employee_Department:{
        type:String,
        required:true
    },
    employee_salary:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model('EmployeeModel',EmployeeSchema)