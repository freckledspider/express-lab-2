const { response } = require('express');
const express = require('express');

const app = express();
const PORT = 3000;


// greetings

app.get('/greeting', (request, response) => {
    response.send("Hello, stranger")
})


app.get('/greeting/:name', (request, response) => {
    response.send(`Wow! Hello there, ${request.params.name}`)
})


// tip calculator

app.get('/tip/:total/:tipPercentage', (request, response) => {
    const total = `${request.params.total}`;
    const tipPercentage = `${request.params.tipPercentage}`
    let tipAmount = total * tipPercentage/100;
    response.send(`Total: $${total}
    Tip Percentage: ${tipPercentage}%
    Tip Amount: $${tipAmount}`)
})

app.listen(PORT, () => {
    console.log(`listening to post ${PORT}`)
})