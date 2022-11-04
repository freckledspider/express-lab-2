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
    response.send(`Total: $${total}<br>
    Tip Percentage: ${tipPercentage}%<br>
    Tip Amount: $${tipAmount}`)
})


// magic 8 ball

const magic8Ball = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

app.get('/magic/:question', (request, response) => {
    const random = magic8Ball[Math.floor(Math.random() * magic8Ball.length)];
    response.send(`${request.params.question}?<br>
    <h1>${random}</h1>`)
})

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})