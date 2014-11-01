var requirejs = require('requirejs');
var assert = require('assert');

requirejs.config({
	nodeRequire: require
	, baseUrl : '.'
	, paths : {
		'text' : './bower_components/requirejs-text/text'
		, 'js-yaml' : './bower_components/js-yaml/dist/js-yaml'
		, 'yaml' : './yaml'
	}
});

describe('yaml loader', function(){

	it('should render YAML into JavaScript objects', function(done){
		requirejs(['yaml!test/fixtures/test.yaml'], function(data){
			assert.deepEqual(data, {
				key1 : 'string'
				, key2 : {
					nested1 : 999
					, nested2 : 'foo'
				}
				, key3 : [9,8,7,6]
			});
			done();
		});
	});

	it('should call the errback on malformed input', function(done){
		requirejs(['yaml!test/fixtures/invalid.yaml'], function(){
			assert(false);
			done();
		}, function(err){
			assert(true);
			done();
		});
	});

});

describe('yaml writer', function(done){
	it('compiles YAML into dependency-less modules', function(done){

		this.timeout(7500);

		requirejs.optimize({
			baseUrl : '.'
			, name : './bower_components/almond/almond'
			, paths : {
				'text' : './bower_components/requirejs-text/text'
				, 'js-yaml' : './bower_components/js-yaml/dist/js-yaml'
				, 'yaml' : './yaml'
			}
			, optimize : 'none'
			, include : ['./test/main']
			, inlineText : false
			, stubModules : ['text', 'js-yaml', 'yaml']
			, out: 'test/main-built.js'
		}, function(){
			var exec = require('child_process').exec;
			var process = exec('phantomjs test/loadindex.js', function(err, stdout){
				if (err){
					assert(false);
				} else {
					assert(stdout.indexOf('<h1 id="fixture">foo</h1>') > -1);
				}
				done();
			});
		});

	});
});