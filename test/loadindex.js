var page = require('webpage').create();
page.open('test/index.html', function(status){
	setTimeout(function(){
	    console.log(page.content);
	    phantom.exit();
	}, 2000);
});