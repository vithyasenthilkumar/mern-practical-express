const express=require('express')
const router=express.Router()
const {getAllEmployee,createAEmployee,updateAEmployee,deleteAEmployee}=require('../Controllers/employee')
router.route('/').get(getAllEmployee).post(createAEmployee).patch(updateAEmployee).delete(deleteAEmployee)
module.exports=router