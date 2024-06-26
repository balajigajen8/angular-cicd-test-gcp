const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '../dist/your-angular-app')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/your-angular-app/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
