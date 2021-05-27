const express = require('express');
const bodyParser = require('body-parser');

const Routes = require('./Routes/Ceps');

const app = express();

const PORT = 3000;

app.use(bodyParser.json())

app.use(Routes)

app.listen(PORT, () => console.log(`Listen on port ${PORT}`));