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
// const imageFilePath = path.resolve(__dirname, '../src/assets/images');
// const fontFilePath = path.resolve(__dirname, '../src/assets/fonts');

const pickVendorImagesFrom = path.resolve(target, 'images');
const dumpVendorImagesTo = path.resolve(staticFilePath, 'images');

const pickVendorFontsFrom = path.resolve(target, 'fonts');
const dumpVendorFontsTo = path.resolve(staticFilePath, 'fonts');


console.log('Will serve static files@ ', staticFilePath);
app.use(express.static(staticFilePath));                                      // serve vendor's dist.

webpackConfig.output.path = path.resolve(webpackConfig.output.path, vendor);

var assetCopyDone = fs.copySync(source, target);                              // copy vendor's assets... Might not be used in future.
var copyImages    = fs.copySync(pickVendorImagesFrom, dumpVendorImagesTo);    // copy vendor images in dist.
var copyFonts     = fs.copySync(pickVendorFontsFrom, dumpVendorFontsTo);      // copy vendor's fonts in dist.

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
    console.log(' ==== Re-buiding ====');
    console.log(stats.toString({ colors: true }));
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