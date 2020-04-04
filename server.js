const express = require("express");


const app = express();

app.get("/api/customers",(req,res)=>{
    const customers = [
        {id: 1, firstName: 'Sourav', lastName: 'Santra'},
        {id: 2, firstName: 'Ankush', lastName: 'Ghose'},
        {id: 3, firstName: 'Gourav', lastName: 'Sharma'}
    ];
    res.json(customers);
})

//server create
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})