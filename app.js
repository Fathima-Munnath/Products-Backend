const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')





const app =express()
app.use(express.json())
app.use(cors())


const productRouter = require('./routers/productRouter')


app.get('/',(req,res)=>{
    res.send("Hello")
})

app.use('/products', productRouter)


async function main() {
  await mongoose.connect('mongodb+srv://fathimamunnath:V5PjqN2ZzxYbREQf@cluster0.kpq39.mongodb.net/productDB');
}

main()
.then(()=>console.log("Database connected"))
.catch(err => console.log(err));



app.listen(3000,()=>{
    console.log ("Server started")

})