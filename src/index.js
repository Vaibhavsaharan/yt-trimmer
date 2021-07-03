const express = require('express');
const robots = require('./robots');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/trim', async (req,res) =>{
  const info = req.body;
  console.log(info);
  try {
    await robots.info(info);
    await robots.download(info);
    res.send('Done');
  } catch (err) {
    console.log('Error waiting for robots:\n\n ', err);
    res.send('Error!')
  }
})

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Express listening on ${port}`);