/**
 * Created by edward on 23.02.16.
 */

var VRBL = require('variables.js');
var pageUnderTest = "About";
casper.options.viewportSize = {width: 1024, height: 768};

casper.test.begin( VRBL.namesite + ' web site, page ' + pageUnderTest , function (test) {
    casper.start();
    casper.thenOpen ( VRBL.currentsite + 'about' , function() {
        test.assertHttpStatus(200, pageUnderTest + ' page was loaded successfully.');
        test.assertTitle( VRBL.titleAbout, "Title ОК");
    });

    casper.run(function() {
        test.done();
    });
});
