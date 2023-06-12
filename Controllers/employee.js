const express=require('express')
const EmployeeModel=require('../Models/employee')
const getAllEmployee=(request,response)=>{
    response.send(`Displaying all Employees`)
}
const createAEmployee=(request,response)=>{
    response.send(`Creating a Employee`)
}
const updateAEmployee=(request,response)=>{
    response.send(`Updating a Employee`)
}
const deleteAEmployee=(request,response)=>{
    response.send(`Deleting a Employee`)
}
module.exports={getAllEmployee,createAEmployee,updateAEmployee,deleteAEmployee}