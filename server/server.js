const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3000;

// Set CORS option
app.use(cors());

// Parse requests of content-type: application/json
app.use(bodyParser.json());

// Parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//route
app.use('/', require('./route/food'));

//DB connect
const db = require('./model/index');
db.sequelizeConfig.sync()
    .then(() => {
        console.log('database connected.');
    })
    .catch((error) => {
        console.error('database connect error:', error);
    });;

// Default route for server status
app.get('/', (req, res) => {
    res.json({ message: `Server is running on port ${PORT}` });
});

// Set listen port for request
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});