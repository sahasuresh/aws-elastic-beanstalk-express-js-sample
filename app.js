const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello to World! <br> --From Suresh'));
app.get('/', (req, res) => res.send('Completing pipeline test'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
