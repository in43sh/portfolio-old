const express = require ('express');
const bodyParser = require ('body-parser');
const path = require('path')
const port = process.env.PORT || 3333;
const app = express();

app.use( bodyParser.json() );

app.use( express.static( `${__dirname}/../build` ) );

// Production
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

// Connecting our port
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );