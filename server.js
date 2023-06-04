require('dotenv').config()

const express=require('express')

const port = process.env.PORT

const app=express()


app.get('/',(req,res)=>{
    console.log('hello world')
})

app.listen(port,()=>{
    console.log(`listening on port  ${port}`)
})