const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const app = express();


app.use(morgan('combined'));


app.use(cors());


app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});


app.post('/data', (req, res) => {
  const { name, age } = req.body;
  console.log(`Received data: Name - ${name}, Age - ${age}`);
  res.json({ message: 'Data received!', data: req.body });
});


app.listen(5000, () => {
  console.log('Server running on port 5000');
});