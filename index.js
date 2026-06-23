require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!   .......');
   console.log(req.query);
  console.log(req.method);

});
app.get('/twitter', (req, res) => {
  res.send('Hello Devesh!   .......');
  console.log(req.query);
  console.log(req.method);
});

app.get('/login',(req ,res)=>{
  res.send('<h1>heloooo baby girl</h1>')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});