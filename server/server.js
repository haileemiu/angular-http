const express = require('express');
const app = express();


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

const port = 5000;

// eventually this will live on the database (mongo)
let shells = [
  { type: 'Conch', color: 'pink' }, 
  { types: 'Blue', color: 'blue' }
];

app.get('/shells', (req,res) => {
  res.send(shells);
})

// spin up server
app.listen(port, () => {
  console.log('server up on:', port);
}) // end server up