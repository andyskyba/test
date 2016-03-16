
/*
TEST 
https://lab.drudesk.com/task/584
*/

casper.options.viewportSize = {width: 1024, height: 760};

casper.test.begin('StudentHut task 584', function (test) {
    casper.start();

    casper.thenOpen ('http://www.studenthut.com/offers', function() {
        //Load homepage
        test.assertHttpStatus(200, 'http://www.studenthut.com/offers page was loaded successfully.');

        test.assertSelectorHasText('title', 'Offers | Student Hut');
        test.comment('START FRONT-END TESTING');
        
        test.assertSelectorHasText('body', '50 % Off Birchbox !');

    });



    casper.run(function() {
        test.done();
    });
});