const express=require('express')
const app=express()
const PORT=3500
const EmployeeRouter=require('./Routes/employee')
app.get('/',(request,response)=>{
    response.send('Welcome to Employee Working')
})
app.use('/api/v1/employee',EmployeeRouter)
app.listen(PORT ,()=>{
    console.log(`Server running in http://localhost:${PORT}`)
})