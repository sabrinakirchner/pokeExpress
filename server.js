const express = require("express");
//const app = express(); 
const server = express();
const react =require ('react');
const ReactDOMServer = require('react-dom/server');
const Index =require('./views/Index.jsx').default; 
//const Show = require('./views/Show').default;

const PORT = process.env.PORT || 3000;

server.use(express.static('client/build'));
const pokemon = require('./models/pokemon'); 


/*
//index
server.get('/', (req, res)=> {
    res.send('Welcome to the Pokemon App!');
});


server.get('*', (req, res) => {
    const indexComponent = ReactDOMServer.renderToString(<Index pokemon={pokemon} />);
    res.send(indexComponent); 
})
*/

server.get('/pokemon/:id', (req, res) => {
    const id = req.params.id;
    //const showComponent = ReactDOMServer.renderToString(<Show id={id} pokemon={pokemon} />);
    res.send('Show Pokemon with ${id}');
  });


//pokemon.js data.json
server.get('/pokemon',(req,res) => {
    res.json(pokemon);
}); 

/*
server.get("/", (req, res)=>{
   res.status(200).json({message: "Welcome to the Pokemon app!"})
});
*/

server.listen(PORT, ()=>{
    console.log(`Server is listening at: ${PORT}`)
});