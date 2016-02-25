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
 3.1) Logo +
 3.2) Menu links +
 3.3) Contact info +
 3.4) Social buttons +

 4) Verifying information at footer
 4.1) Menu links
 4.2) Contact info +
 4.3) Social buttons

 */
var VRBL = require('variables.js');
var siteTest = VRBL.currentsite;

casper.options.viewportSize = {width: 1024, height: 768};

casper.test.begin('Drudesk web site HOME PAGE test', function (test) {
    casper.start();

        casper.thenOpen (VRBL.currentsite, function() {
        //Load homepage
        test.assertHttpStatus(200, 'Homepage was loaded successfully.');

        //CHECK TITLE
        //test.assertTitle("Drupal website maintenance & support | Drudesk", "Title ОК");
        test.assertSelectorHasText('title', 'Drupal website maintenance & support | Drudesk');
        test.comment('START FRONT-END TESTING');
        test.assertVisible('header', 'Header is visible');
        test.assertVisible('footer', 'Footer is visible');

        //CHECK logo image exist
        test.assertResourceExists('logo.png', 'LOGO image exist');

        //CHECK MENU LINKS
        //"How it works", "Pricing", "About", "Blog"
        var menuLinkSelector = VRBL.selHowItWorks;  //How it works
        var menuLinkName = VRBL.nameHowItWorks;

        test.comment('Verifying '+menuLinkName);
        test.assertExists( menuLinkSelector, menuLinkName+' link is present.');
        test.assertSelectorHasText(menuLinkSelector, menuLinkName);

        menuLinkSelector = VRBL.selPricing;  //Pricing
        menuLinkName = VRBL.namePricing;

        test.comment('TESTING MENU at HEADER');
        test.comment('Verifying '+menuLinkName);
        test.assertExists( menuLinkSelector, menuLinkName+' link is present.');
        test.assertSelectorHasText(menuLinkSelector, menuLinkName);

        menuLinkSelector = VRBL.selAbout;  //About
        menuLinkName = VRBL.nameAbout;
        
        test.comment('Verifying '+menuLinkName);
        test.assertExists( menuLinkSelector, menuLinkName+' link is present.');
        test.assertSelectorHasText(menuLinkSelector, menuLinkName);

        menuLinkSelector = VRBL.selBlog;  //Blog
        menuLinkName = VRBL.nameBlog;

        test.comment('Verifying '+menuLinkName);
        test.assertExists( menuLinkSelector, menuLinkName+' link is present.');
        test.assertSelectorHasText(menuLinkSelector, menuLinkName);

        test.comment('Verifying CONTACTS on page at header');
        test.assertSelectorHasText(VRBL.selPhoneHeader, VRBL.textContactPhone); // Verifying contact phone header
        test.assertSelectorHasText(VRBL.selEmailHeader, VRBL.textContactEmail); // Verifying contact email header

        test.comment('Verifying CONTACTS on page at footer');
        test.assertSelectorHasText(VRBL.selPhoneFooter, VRBL.textContactPhone); // Verifying contact phone header
        test.assertSelectorHasText(VRBL.selEmailFooter, VRBL.textContactEmail); // Verifying contact email header

        test.comment('Testing EXISTING social buttons and its links');
        test.assertExists(VRBL.selFacebookHeader, 'FACEBOOK button exists');
        test.assertSelectorHasText(VRBL.selSocialHeader, VRBL.textFacebookLink);

        });


    casper.run(function() {
        test.done();
    });
});