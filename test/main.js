require(['yaml!test/fixtures/test.yaml'], function(data){
	var headline = document.createElement('h1');
	headline.innerHTML = data.key2.nested2;
	headline.id = 'fixture';
	document.body.appendChild(headline);
});