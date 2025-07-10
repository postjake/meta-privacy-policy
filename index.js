const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/privacy', (req, res) => {
  res.send(`
    <html>
      <head><title>Privacy Policy</title></head>
      <body>
        <h1>Privacy Policy</h1>
        <p>This app does not collect or store personal information. It only uses Meta's API to publish Instagram content on behalf of the authorized account. No data is stored or shared.</p>
      </body>
    </html>
  `);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Privacy Policy server running on port ${PORT}`);
});
