// IMPORTANDO EXPRESS
const express = require('express');
const app = express();

// IMPORTANDO PATH
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/inicio', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html')); /* __dirname: Devuelve la ruta del archivo actual */
});

app.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'cart_details.html'));
});

// CREAR MI SERVIDOR
app.listen(3000, () => {
    console.log(`Servidor ejecutandose en http://localhost:3000`);
}); 