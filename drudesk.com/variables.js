
module.exports = {
	currentsite: 'http://drudesk.com/',
	namesite: 'DruDesk',
	pageAbout: 'about/',
	pageBlog: 'blog/',

	//Browser window size
	widthDesktop: 1024,
	heightDesktop: 768,

	widthMobile: 360, //Samsung Galaxy S3
	heightMobile: 640,

	widthTablet: 768, //Apple iPad
	heightTablet: 1024,



	//Elements ON SITE HOME PAGE
	//HEADER
	//homepage:
	nameHowItWorks: 'How it works', // name menu link "How it works"
	selHowItWorks: 'li.first.leaf.active', // selector menu link "How it works"

	//pricing:
	namePricing: 'Pricing', // name menu link "Pricing"
	selPricing: 'li.leaf.active', // selector menu link "Pricing"
	pageAboutTitle: 'About us - website support and maintenance company | Drudesk',

	//about:
	nameAbout: 'About', // name menu link "About"
	selAbout: 'li.leaf', // selector menu link "About"

	//blog:
	nameBlog: 'Blog', // name menu link "Blog"
	selBlog: 'header a[href="/blog"]', // selector menu link "Blog"

	//Contacts VRBLs
	selPhoneHeader: 'div.region.region-top-contacts', //Phone selector in header
	selPhoneFooter: 'div.bottom-contacts', //Phone selector in header
	textContactPhone: '+380 50 640 98 44',

	selEmailHeader: 'div.region.region-top-contacts', //Email selector in header
	selEmailFooter: 'div.bottom-contacts', //Email selector on footer
	textContactEmail: 'leviks@drudesk.com',

	//Social buttons: FACEBOOK, GOOGLE+, TWITTER, LINKEDIN
	selSocialHeader: 'div.top-social.col', //General selector social buttons header

	selFacebookHeader: 'header .top-social .facebook a', //Facebook selector in header
	textFacebookLink: 'https://www.facebook.com/drudesk', //Facebook account link

	selGooglePlusHeader: 'header .top-social .google a', //GooglePlus selector in header
	textGooglePlusLink: 'https://plus.google.com/+Drudesk-Drupal-Support', //Facebook account link

	selTwitterHeader: 'header .top-social .twitter a', //TWITTER selector in header
	textTwitterLink: 'https://twitter.com/drudesk', //TWITTER account link

	selLinkedInHeader: 'header .top-social .linkedin a', //LINKEDIN selector in header
	textLinkedInLink: 'https://www.linkedin.com/company/drudesk', //LINKEDIN account link

	//FOOTER
	//homepage:
	nameHowItWorksFooter: 'How it works', // name menu link "How it works"
	selHowItWorksFooter: 'footer li.first.leaf.active', // selector menu link "How it works"

	//pricing:
	namePricingFooter: 'Pricing', // name menu link "Pricing"
	selPricingFooter: 'footer li.leaf.active', // selector menu link "Pricing"

	//about:
	nameAboutFooter: 'About', // name menu link "About"
	selAboutFooter: 'footer li.leaf', // selector menu link "About"

	//blog:
	nameBlogFooter: 'Blog', // name menu link "Blog"
	selBlogFooter: 'footer a[href="/blog"]', // selector menu link "Blog"

	//SOCIAL BUTTONS in Footer
	selFacebookFooter: 'footer .bottom-social .facebook a', //Facebook selector in Footer
	selGooglePlusFooter: 'footer .bottom-social .google a', //GooglePlus selector in Footer
	selTwitterFooter: 'footer .bottom-social .twitter a', //TWITTER selector in Footer
	selLinkedInFooter: 'footer .bottom-social .linkedin a', //LINKEDIN selector in Footer

	//FORMS VARIABLES
	//HOMEPAGE
	selButtonFindOutHow: 'div.find-out-how a', //button "FIND OUT HOW" selector
	selFormFindOutHow: 'form[action="/modal/ajax/57"]', //form "FIND OUT HOW" selector
	selButtonSubmit: '#edit-submit', //button "SUBMIT" selector
	selResponsePopup: '.node.node-webform-response.node-promoted.clearfix', // Confirmation message pop-up selector
	selResponseText: '.confirmation-text',
	textResponse: 'Thank you! We will contact you soon.',

	//TEST DATA
	testName: 'Edward',
	testEmail: 'sky@test.com',
	testMessage: 'DO NOT RESPOND. This is just test! :)',
}