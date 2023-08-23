const express = require("express");
const pokemon = require('./models/pokemon');//should import pokemon data

const server = express();
const PORT = process.env.PORT || 3000;


//pokemon.js data.json
server.get('/pokemon',(req,res)=> {
    res.json(pokemon);
}); 


server.get("/", (req, res)=>{
    res.status(200).json({message: "Welcome to the Pokemon app!"})
});

server.listen(PORT, ()=>{
    console.log(`Server is listening at: ${PORT}`)
});