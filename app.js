var express = require('express');
var routes = express.Router();
var app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/publics'));
app.use(express.static(__dirname + '/views'));
//设置跨域
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200); //让options请求快速返回/
    }
    else {
        next();
    }
});
app.use('/', routes);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

module.exports = app;