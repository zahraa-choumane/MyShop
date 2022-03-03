const express       = require('express')
const bodyParser    = require('body-parser');
const cors          = require('cors');

const app           = express();
const port          = 3000;

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json({limit: '10mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));

app.get('/', (req, res) => {
    res.json("Hello World");
});

/* CODE IN BETWEEN */

/* CODE IN BETWEEN */

/* LISTEN */
app.listen(port, function() {
    console.log("Listening to " + port);
});