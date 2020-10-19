const bodyParser = require('body-parser'),
      express = require('express'),
      cors    = require('cors'),
      mongoose = require('mongoose');      

const dbConfig = require('./src/config/database');

const routes = require ('./src/framework/routes');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then( _ => {
    // support parsing of application/json type post data
    app.use(bodyParser.json());

    //support parsing of application/x-www-form-urlencoded post data
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(cors());    

    app.use('/', routes())
            
    
    app.listen(8000, () => {
        console.log('Example app listening on port 8000!')
    });

}, e => {
    console.log('db is not ready', e)
}).catch(e => console.log(e));





      





