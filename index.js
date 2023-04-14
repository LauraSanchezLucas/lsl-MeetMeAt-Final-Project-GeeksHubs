const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.json());


const db = require('./db.js');

const PORT = process.env.PORT || 4000;
const router = require('./router');
app.use(router);



// app.get('/welcome', (req, res) => {
//     return res.send("Bienvenido a mi app")
// })


db.then(() => {
    //Starting server
    app.listen(PORT, () => console.log('Server on port ' + PORT));
})
    .catch((err) => console.log(err.message)); 


