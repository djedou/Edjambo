let express = require('express');
let app = express();
let http = require('http');
let bodyParser = require('body-parser');
let path = require('path');


app.use(express.static(path.join(__dirname,'public')));
// for parsing application/www-
app.use(bodyParser.urlencoded({
    extended: true
    }));
    // for parsing application/json
app.use(bodyParser.json());


require("./routes/auth")(app);
require("./models/dbClient");

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
  }
);
  // error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send('error');
  }
);

http.createServer(app).listen(3085);