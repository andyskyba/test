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
 4.1) Menu links +
 4.2) Contact info +
 4.3) Social buttons +
 */

var VRBL = require('variables.js');
var siteTest = VRBL.currentsite;
var widthWindow = VRBL.widthDesktop;
var heightWindow = VRBL.heightDesktop;

//Current variables
var menuLinkSelector = 'string';
var menuLinkName = 'string';
var link = 'address';

//Making ScreenShots with unik number
var screenshotCounter = 0;
function screenNum(){
    return ++screenshotCounter;
};


casper.options.viewportSize = {width: widthWindow, height: heightWindow};
//casper.options.viewportSize = {width: 1024, height: 768};

casper.test.begin('Drudesk web site HOME PAGE test', function (test) {
    casper.start();

    casper.thenOpen (siteTest, function() {
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

        test.comment('TESTING MENU at HEADER');

        menuLinkSelector = VRBL.selHowItWorks;  //How it works
        menuLinkName = VRBL.nameHowItWorks;

        test.comment('Verifying '+menuLinkName);
        test.assertExists( menuLinkSelector, menuLinkName+' link is present.');
        test.assertSelectorHasText(menuLinkSelector, menuLinkName);

        menuLinkSelector = VRBL.selPricing;  //Pricing
        menuLinkName = VRBL.namePricing;

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

        test.comment('Testing EXISTING social buttons and its links');

        test.assertExists(VRBL.selFacebookHeader, 'FACEBOOK button exists');

        link = casper.getElementAttribute(VRBL.selFacebookHeader, 'href');
        if (link == VRBL.textFacebookLink){
            test.pass(VRBL.textFacebookLink+' - correct link on site');
        } else
            test.fail(link+' is incorrect link on site');

        test.assertExists(VRBL.selGooglePlusHeader, 'GOOGLE Plus button exists');

        link = casper.getElementAttribute(VRBL.selGooglePlusHeader, 'href');
        if (link == VRBL.textGooglePlusLink){
            test.pass(VRBL.textGooglePlusLink + ' - correct link on site');
        } else
            test.fail(link+' is incorrect link on site');

        test.assertExists(VRBL.selTwitterHeader, 'TWITTER Plus button exists');

        link = casper.getElementAttribute(VRBL.selTwitterHeader, 'href');
        if (link == VRBL.textTwitterLink){
            test.pass(VRBL.textTwitterLink + ' - correct link on site');
        } else
            test.fail(link+' is incorrect link on site');

        test.assertExists(VRBL.selTwitterHeader, 'TWITTER Plus button exists');

        link = casper.getElementAttribute(VRBL.selLinkedInHeader, 'href');
        if (link == VRBL.textLinkedInLink){
            test.pass(VRBL.textLinkedInLink + ' - correct link on site');
        } else
            test.fail(link+' is incorrect link on site');


        test.comment('TESTING ELEMENTS at FOOTER');

        test.comment('Verifying CONTACTS on page at footer');
        test.assertSelectorHasText(VRBL.selPhoneFooter, VRBL.textContactPhone); // Verifying contact phone footer
        test.assertSelectorHasText(VRBL.selEmailFooter, VRBL.textContactEmail); // Verifying contact email footer


        test.comment('TESTING MENU at FOOTER');

        menuLinkSelector = VRBL.selHowItWorksFooter;  //How it works
        menuLinkName = VRBL.nameHowItWorksFooter;

        test.comment('Verifying '+menuLinkName);
        test.assertExists( menuLinkSelector, menuLinkName+' link is present.');
        test.assertSelectorHasText(menuLinkSelector, menuLinkName);

        menuLinkSelector = VRBL.selPricingFooter;  //Pricing
        menuLinkName = VRBL.namePricingFooter;

        test.comment('Verifying '+menuLinkName);
        test.assertExists( menuLinkSelector, menuLinkName+' link is present.');
        test.assertSelectorHasText(menuLinkSelector, menuLinkName);

        menuLinkSelector = VRBL.selAboutFooter;  //About
        menuLinkName = VRBL.nameAboutFooter;

        test.comment('Verifying '+menuLinkName);
        test.assertExists( menuLinkSelector, menuLinkName+' link is present.');
        test.assertSelectorHasText(menuLinkSelector, menuLinkName);

        menuLinkSelector = VRBL.selBlogFooter;  //Blog
        menuLinkName = VRBL.nameBlogFooter;

        test.comment('Verifying '+menuLinkName);
        test.assertExists( menuLinkSelector, menuLinkName+' link is present.');
        test.assertSelectorHasText(menuLinkSelector, menuLinkName);

        test.comment('Testing EXISTING social buttons and its links at FOOTER');
        test.assertExists(VRBL.selFacebookFooter, 'FACEBOOK button exists');

        link = casper.getElementAttribute(VRBL.selFacebookFooter, 'href');
        if (link == VRBL.textFacebookLink){
            test.pass(VRBL.textFacebookLink+' - correct link on site');
        } else
            test.fail(link+' is incorrect link on site');

        test.assertExists(VRBL.selGooglePlusFooter, 'GOOGLE Plus button exists');

        link = casper.getElementAttribute(VRBL.selGooglePlusFooter, 'href');
        if (link == VRBL.textGooglePlusLink){
            test.pass(VRBL.textGooglePlusLink + ' - correct link on site');
        } else
            test.fail(link+' is incorrect link on site');

        test.assertExists(VRBL.selTwitterFooter, 'TWITTER Plus button exists');

        link = casper.getElementAttribute(VRBL.selTwitterFooter, 'href');
        if (link == VRBL.textTwitterLink){
            test.pass(VRBL.textTwitterLink + ' - correct link on site');
        } else
            test.fail(link+' is incorrect link on site');

        test.assertExists(VRBL.selTwitterFooter, 'TWITTER Plus button exists');

        link = casper.getElementAttribute(VRBL.selLinkedInFooter, 'href');
        if (link == VRBL.textLinkedInLink){
            test.pass(VRBL.textLinkedInLink + ' - correct link on site');
        } else
            test.fail(link+' is incorrect link on site');

        //MAKING SCRTEENSHOTS
        test.comment('Making screenshot');
        casper.capture('screenshots/' + screenNum()+VRBL.namesite + '.png', {
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