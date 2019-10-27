const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const indexRoute = require('./routes/index');
const eventRoute = require('./routes/event');
const memberRoute = require('./routes/member');
const equipmentRoute = require('./routes/equipment');

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:false}));
app.use(memberRoute);
app.use(eventRoute);
app.use(indexRoute);
app.use(equipmentRoute);

app.listen(3000);
