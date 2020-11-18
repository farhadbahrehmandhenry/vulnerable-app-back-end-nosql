const express = require('express');
const app = express();
const db = require('./db');
const apiRouter = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/vulnerable', apiRouter);

try {
  db.connectDb();
} catch (error) {
 console.log('error', error);
}

const Port = process.env.Port || 3100;

app.listen(Port, () => console.log(`server started on port ${Port}`));

