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


casper.test.begin('Drudesk web site HOME PAGE test',3, function (test) {
    casper.start();

        casper.thenOpen ('http://drudesk.com/', function() {
        //Load homepage
        test.assertHttpStatus(200, 'Homepage was loaded successfully.');
        //CHECK TITLE
        //test.assertTitle("Drupal website maintenance & support | Drudesk", "Title ОК");
        test.assertSelectorHasText('title', 'Drupal website maintenance & support | Drudesk');

        //CHECK logo image exist
        test.assertResourceExists('logo.png', 'LOGO image exist');

        //CHECK MENU LINKS
        //"How it works", "Pricing", "About", "Blog"
        test.assertExists('div#logo', 'Header link to the homepage is present.');

    });
    casper.run(function() {
        test.done();
    });
});

//
//
//var casper = require('casper').create();
//
//casper.start('http://drudesk.com/', function() {
//    this.echo(this.getTitle());
//    casper.capture("test.png");
//});
//
//
//casper.run();