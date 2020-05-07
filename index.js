const express = require('express'); // import the express package

const server = express(); // creates the server
server.use(express.json());//allows express to read json

const db = require('./database/db-config.js');

// handle requests to the root of the api, the / route
server.get('/', (req, res) => {
  res.send('Hello from Express');
});

//endpoints
//post to api/users -> send user info in request body
server.post('/api/users', (req,res) => {
    let user = req.body;
    if(!req.body.name || !req.body.bio){
        res.status(400).json({errorMessage: "Please provide name and bio for the user."})
    }else{
        db('users').insert(user)
        .then(dbRes => {
            res.status(201).json(dbRes)
        })
        .catch(error => {
            res.status(500).json({errorMessage: "There was an error while saving the user to the database"})
        })
    }
    
})
//get to api/users -> returns array of users
server.get('/api/users', (req,res) => {
    db.select().table('users')
        .then(user => {
            res.status(200).json(user)
        })
        .catch(error => {
            res.status(500).json({})
        })
})
//get api/users/:id -> return user object with specified id
server.get('/api/users/:id', (req,res) => {
    db('users').where('id', req.params.id)
        .then(user => {
            console.log('user: ', user)
            res.status(201).json(user)
        })
        .catch(error => {
            res.status(500).json({errorMessage: "The user information could not be retrieved."})
        })
})
//delete api/users/:id -> removes user with specified id and returns deleted user
server.delete('/api/users/:id', (req,res) => {
    db('users').where('id', req.params.id).del()
        .then(user => {
            res.status(201).json(user)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})
//patch api/users/:id -> 


// watch for connections on port 5000
//heroku will add the PORT variable to the environment
const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log('Server running on http://localhost:5000')
);