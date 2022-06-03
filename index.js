const express = require('express');
const cors = require('cors');
const {mongoose} = require('./database')

var app = express();

app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//MODULO DE DIRECCIONAMIENTO DE RUTAS

app.use('/api/libro', require('./routes/libro.route.js'));
app.use('/api/transaccion', require('./routes/transaccion.route.js'));
app.use('/api/persona', require('./routes/persona.route.js'));
app.use('/api/pasaje', require('./routes/pasaje.route'))

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () =>{
    console.log('Server started on port', app.get('port'));
});