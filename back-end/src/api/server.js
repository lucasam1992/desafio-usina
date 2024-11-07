require('dotenv').config();

const fs = require('fs');
const https = require('https');

const app = require('./app');

const PORT = process.env.API_PORT;

try {
  https.createServer({
    key: fs.readFileSync(process.env.CERT_KEY),
    cert: fs.readFileSync(process.env.CERT),
  }, app)
    .listen(PORT, () => console.log(`Conectado usando HTTPS na porta ${PORT}`));
} catch (err) {
  app.listen(PORT, () => console.log(`Conectado usando HTTP na porta ${PORT}`));
}