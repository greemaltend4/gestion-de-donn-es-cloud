const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Bienvenue dans l\'application Gestion de Données Cloud !');
});

app.listen(PORT, () => {
    console.log(`Serveur en marche sur le port ${PORT}`);
});
