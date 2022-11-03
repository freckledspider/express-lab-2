const { response } = require('express');
const express = require('express');

const app = express();
const PORT = 3000;



app.get('/greeting', (request, response) => {
    response.send("Hello, stranger")
})


app.get('/greeting/:name', (request, response) => {
    response.send(`Wow! Hello there, ${request.params.name}`)
})


app.listen(PORT, () => {
    console.log(`listening to post ${PORT}`)
})