const express = require('express');
const fs = require('fs');
const path = require('path');

const todoFilePath = path.join(__dirname,'/todos.json');
const app = express()
app.use(express.json());

const readtodo = (req,res)=>{
    let todos = []
    
    todos = fs.readFileSync(todoFilePath,'utf8');
    console.log(todoFilePath)
    res.send(todos)
}
app.get("/todos",readtodo)

app.post('/todos',(req,res) => {
    const  text  = req.body;
    if(!text) { 
        return res.status(400).json({error:"text is not required"})
       }
       fs.appendFile('todos.json', {text , completed:false}, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('Text has been appended');
      });

   
    
    res.status(201).json({ message: `Added todo: "${text}"` });
    
})


app.listen(3000,()=>{
    console.log("Server Started")
})