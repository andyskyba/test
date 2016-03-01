/**
 * Created by user on 01.03.16.
 */
/**
 * Created by user on 29.02.16.
 */
/**
 * Created by edward on 23.02.16.
 */


/*
 Test FORM and CONFIRMATION MESSAGE
 form "FIND OUT HOW"
 site: http://drudesk.com/
 Order of the testing:
 1) Open for 'FIND OUT HOW'
 2) Fill form with test data
 3) Make screenshot
 4) Submit and verify confirmation message
 5) Make screenshot
 */

var VRBL = require('variables.js');
var siteTest = VRBL.currentsite;
var widthWindow = VRBL.widthDesktop;
var heightWindow = VRBL.heightDesktop;

//Current variables
var link = 'address';

//Making ScreenShots with unique number function
var screenshotCounter = 0;
function makeScreen(test){
    test.comment('Making screenshot');
    casper.capture('screenshots/' + (++screenshotCounter)+VRBL.namesite + '.png', {
        top: 0,
        left:0,
        width: widthWindow,
        height: 1500
    });
};

casper.options.viewportSize = {width: widthWindow, height: heightWindow};

casper.test.begin('Drudesk web site HOME PAGE test', function (test) {
    casper.start();

    casper.thenOpen (siteTest, function() {
        //Load homepage
        test.assertHttpStatus(200, 'HOMEPAGE page was loaded successfully.');

        casper.click(VRBL.selButtonFindOutHow);
        casper.waitForSelector (VRBL.selFormFindOutHow,  //'#webform-client-form-57' or 'form[action="/modal/ajax/57"]'
            function success () {
                test.comment("Form opened successful...");
                test.assertVisible(VRBL.selFormFindOutHow, 'FORM is visible');
                casper.fill(VRBL.selFormFindOutHow, {
                    'submitted[e_mail]': VRBL.testEmail,
                    'submitted[name]':   VRBL.testName,
                    'submitted[descriptions]':  VRBL.testMessage,
                }, true);

                makeScreen(test);
                casper.click(VRBL.selButtonSubmit);
                casper.waitForSelector (VRBL.selResponsePopup,

                    function success () {
                        test.assertVisible(VRBL.selResponsePopup, 'Confirmation pop-up is visible');
                        test.assertSelectorHasText(VRBL.selResponseText, VRBL.textResponse);
                        makeScreen(test);
                    },
                    function fail () {
                        casper.comment('SCRIPT FAILS');
                    });
            },
            function fail () {
               casper.comment('SCRIPT FAILS');
            });
    });

    casper.run(function() {
        test.done();
    });
});