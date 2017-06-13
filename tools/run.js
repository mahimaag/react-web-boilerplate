const fs = require('fs-extra');
const _fs = require('fs');
const path = require('path');
var webpack = require("webpack");
var webpackConfig = require(path.resolve(__dirname, '../webpack.config.js'));

var express = require('express');
var app = express();

// Define the port to run on
app.set('port', 3000);


console.log('WEbpack', webpackConfig );
const vendor = '_sp1';
const source = path.resolve(__dirname, '../src/assets/' + vendor);
const target = path.resolve(__dirname, '../src/assets/');

const staticFilePath = path.resolve(__dirname, '../dist/'+vendor);
console.log('Will serve static files@ ', staticFilePath);
app.use(express.static(staticFilePath));

webpackConfig.output.path = path.resolve(webpackConfig.output.path, vendor);
// webpackConfig.devServer.contentBase = path.resolve(__dirname, '../src');

var copyDone = fs.copySync(source, target);

// returns a Compiler instance
var compiler = webpack(webpackConfig);

compiler.run(function(err, stats) {
    // ...
    console.log('Build prepared...');
    console.log(stats.toString({ colors: true }));
    startExpressServer();
});

// or
compiler.watch({ // watch options:
    aggregateTimeout: 300, // wait so long for more changes
    poll: true // use polling instead of native watchers
    // pass a number to set the polling interval
}, function(err, stats) {
    // ...
    console.log('Watch executed...');
    // startExpressServer();
});


function startExpressServer() {
    // Listen for requests
    var server = app.listen(app.get('port'), function() {
        var port = server.address().port;
        console.log('Magic happens on port ' + port);
    });

    app.get('*', function(req, res, next){
        return res.sendFile(path.join(__dirname, '../src/index.html'));
    })

}