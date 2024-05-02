// Schritte zum Installieren von Express: npm install express
const express = require('express');

// Eine Instanz von Express erstellen
const app = express();
const PORT = 3000;

// Definiere die Route für GET-Anfragen auf '/'
app.get('/', (req, res) => {
  // Sende eine einfache Textnachricht als Antwort
  res.send('Willkommen bei meinem ersten Express-Server!');
});

// Server starten, um auf Port 3000 zu hören
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
