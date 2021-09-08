const bodyParser = require('body-parser');
const express=require('express')
let app=express();
app.listen(8899);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended:false
}))
app.use(bodyParser.json())
app.get('/user',(req,res)=>{
  res.send('NMSL')
})
app.get('/fucker',(req,res)=>{
  res.send({name:'NMSL',uid:12612})
})
app.get('/jiber',(req,res)=>{ 
  res.send(req.query)
})
app.post('/post',(req,res)=>{
  res.send(req.body)
})
app.post('/lajier',(req,res)=>{
  res.send(req.body)
})
app.get('/NMSL',(req,res)=>{
  res.send('NMSL')
})
app.get('/guier',(req,res)=>{
  
  res.status(400).send('gui');
})
console.log('开启成功')