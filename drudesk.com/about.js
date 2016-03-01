/**
 * Created by user on 29.02.16.
 */
/**
 * Created by edward on 23.02.16.
 */


/*
 Test of ABOUT PAGE
 site: http://drudesk.com/about/
 Order of the testing:
 1) Page title
 2) Existing of header and footer
 3) Verifying information at body
*/

var VRBL = require('variables.js');
var siteTest = VRBL.currentsite + VRBL.pageAbout;
var widthWindow = VRBL.widthDesktop;
var heightWindow = VRBL.heightDesktop;

//Current variables
var link = 'address';

//Making ScreenShots with unique number
var screenshotCounter = 0;
function screenNum(){
    return ++screenshotCounter;
};

casper.options.viewportSize = {width: widthWindow, height: heightWindow};

casper.test.begin('Drudesk web site HOME PAGE test', function (test) {
    casper.start();

    casper.thenOpen (siteTest, function() {
        //Load homepage
        test.assertHttpStatus(200, 'ABOUT page was loaded successfully.');

        test.assertSelectorHasText('title', VRBL.pageAboutTitle);
        test.comment('START FRONT-END TESTING');
        test.assertVisible('header', 'Header is visible');
        test.assertVisible('footer', 'Footer is visible');

        test.comment('Checking body');
        test.assertVisible('body', 'Body is visible');
        test.assertSelectorHasText('body', 'About support service Drudesk');

        //MAKING SCRTEENSHOTS
        test.comment('Making screenshot . . . .');
        casper.capture('screenshots/'+screenNum()+'ABOUT.png', {
            top: 0,
            left:0,
            width: widthWindow,
            height: 1500
        });

    });



    casper.run(function() {
        test.done();
    });
});