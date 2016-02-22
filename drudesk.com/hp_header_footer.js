/**
 * Created by edward on 14.02.16.
 */
/*
 Test of HOME PAGE

 site: http://drudesk.com/

 Order of the testing:
 1) Page title
 2) Existing of header and footer
 3) Verifying information at header
 3.1) Logo
 3.2) Menu links
 3.3) Contact info
 3.4) Social buttons
 4) Verifying information at footer
 4.1) Menu links
 4.2) Contact info
 4.3) Social buttons

 */
var VRBL = require('variables.js');


//var MyUrl = new variables ();

//echo(MyUrl);

var siteTest = VRBL.currentsite;

casper.options.viewportSize = {width: 1024, height: 768};

casper.test.begin('Drudesk web site HOME PAGE test', function (test) {
    casper.start();
    //console.log(VRBL.currentsite);

        casper.thenOpen (siteTest, function() {
        //Load homepage
        test.assertHttpStatus(200, 'Homepage was loaded successfully.');

        //CHECK TITLE
        //test.assertTitle("Drupal website maintenance & support | Drudesk", "Title ОК");
        test.assertSelectorHasText('title', 'Drupal website maintenance & support | Drudesk');
        test.comment('START FRONT-END TESTING');
        test.assertVisible('header', 'Header is visible');

        //CHECK logo image exist
        test.assertResourceExists('logo.png', 'LOGO image exist');

        //CHECK MENU LINKS
        //"How it works", "Pricing", "About", "Blog"
        var menuLinkSelector = VRBL.selHowItWorks;  //How it works
        var menuLinkName = VRBL.nameHowItWorks;

        test.comment('Checking menu links '+menuLinkName);
        test.assertExists( menuLinkSelector, menuLinkName+' link is present.');
        test.assertSelectorHasText(menuLinkSelector, menuLinkName);

        menuLinkSelector = 'li.leaf.active';  //Pricing
        menuLinkName = 'Pricing';

        test.comment('Checking menu links '+menuLinkName);
        test.assertExists( menuLinkSelector, menuLinkName+' link is present.');
        test.assertSelectorHasText(menuLinkSelector, menuLinkName);

        menuLinkSelector = 'li.leaf';  //About
        menuLinkName = 'About';
        
        test.comment('Checking menu links '+menuLinkName);
        test.assertExists( menuLinkSelector, menuLinkName+' link is present.');
        test.assertSelectorHasText(menuLinkSelector, menuLinkName);
        casper.click(menuLinkSelector);
        casper.wait(10000, function() {
            test.comment('DONE');
            //casper.thenClick(menuLinkSelector);
            test.assertSelectorHasText('title', 'About us - website support and maintenance company | Drudesk');
            });

        });
    
    casper.run(function() {
        test.done();
    });
});