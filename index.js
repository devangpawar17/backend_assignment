require('dotenv').config()
const connectToMongo = require('./db_conn')
const express = require('express')
const app = express()
const Invoice = require('./models/invoice')
const mailSender = require('./mailSender')
const port = process.env.PORT || 5000


connectToMongo()
app.use(express.json())


//end point for creating invoice
app.post('/new_invoice',async(req,res)=>{
    try{
       await Invoice.create({
            invoiceName: req.body.invoice_name,
            hoursOfWork: req.body.hours_of_work,
            materialsUsed: req.body.materials_used,
            totalWorkExpenses:req.body.total_work_expenses,
            labour:req.body.labour,
            notes:req.body.notes,
            status:req.body.status,
            dueDate:req.body.due_date,
          });
          //below is mail function 
            //mailSender(req.body)
          res.status(200).send("invoice added")
    }catch(e){
        console.log(e);
        res.status(400).send("something went wrong")
    }
})



//end point to get invoice by id
app.get('/get_invoice_byId',async(req,res)=>{
    try{
    const data = await Invoice.findById(req.body.id)
    res.status(200).send(data)
    }catch(e){
        console.log(e);
        res.status(400).send("something went wrong")
    }
})


//enpoint to update invoice
app.put('/update_status',async(req,res)=>{
    try{
    await Invoice.findByIdAndUpdate(req.body.id,{status:req.body.status})
    res.status(200).send('invoice updated')
    }catch(e){
        console.log(e);
        res.status(400).send("something went wrong")
    }
})


//listening app on port 5000
app.listen(port, () => {
    console.log(`listening on port:- ${port}`)
})