const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public')); // Sert tes fichiers HTML

// Route pour RECUPERER les réglages
app.get('/api/settings', (req, res) => {
    const data = fs.readFileSync('./settings.json');
    res.json(JSON.parse(data));
});

// Route pour SAUVEGARDER les réglages
app.post('/api/settings', (req, res) => {
    const newSettings = req.body;
    fs.writeFileSync('./settings.json', JSON.stringify(newSettings, null, 2));
    res.json({ message: "Réglages mis à jour !" });
});

app.listen(PORT, () => {
    console.log(`Serveur SIMEL démarré sur http://localhost:${PORT}`);
});
