require('dotenv').config();

const bodyParser = require('body-parser'),
    express = require('express'),
    cors = require('cors'),
    mongoose = require('mongoose');



const dbConfig = require('./src/config/database');
const routes = require('./src/framework/routes');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(_ => {

    app.use(bodyParser.json());


    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(cors());

    app.use('/', routes())

    app.listen(9000, () => {
        console.log('Example app listening on port 9000!')
    });

}, e => {
    console.log('db is not ready', e)
}).catch(e => console.log(e));