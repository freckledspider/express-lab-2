const { response } = require('express');
const express = require('express');

const app = express();
const PORT = 3001;

app.get('/', (request, response) => {
    response.send(`99 Bottles of beer on the wall<br>
    <a href="/98">take one down, pass it around</a>`)
})

// for (var numBottles = 98; numBottles >= 0; numBottles--) {
//     console.log(numBottles);

  app.get('/0', (request, response) => {
    response.send(`0 Bottles of beer on the wall<br>
    <a href="/">Start over :)</a>`)
  })

  app.get('/98', (request, response) => {
    response.send(`98 Bottles of beer on the wall<br>
<a href="/97">take one down, pass it around</a>`)
  })

  app.get('/:number_of_bottles', (request, response) => {
    const numBottles = `${request.params.number_of_bottles}`
    const minusOne = numBottles-1
    response.send(`${request.params.number_of_bottles} Bottles of beer on the wall<br>
    <a href="/${minusOne}">take one down, pass it around</a>`)
})

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})