const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const hbs = require('hbs');

dotenv.config();
require('./config/db')();

const app = express();


app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use('/api/productos', prodcutoController = require('./routes/api.routes'));
hbs.registerHelper('multiplicar', (a, b) => a * b);
const carritoRoutes = require('./routes/carrito.routes');
app.use('/carrito', carritoRoutes);

const viewRoutes = require('./routes/views.routes');
app.use('/', viewRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
