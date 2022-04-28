const express = require('express');
const app = express();
const path = require('path');

 
const PORT = process.env.PORT || 3000;

//app.use(express.static('public')); //que utilize public
app.use('/build', express.static('public/build'))


app.get('*', (req, res) => {  //index html entrada
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
 
app.listen(PORT, () => {
    console.log(`Our app is running on port ${PORT}`);
});
