const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 5000; 


app.use(express.static('public')); //que utilize public

app.get('*', (req, res) => {  //index html entrada
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  });


  app.listen(port, () => //prueba 
  console.log(`Server is running on: http://localhost:${port}`)); 