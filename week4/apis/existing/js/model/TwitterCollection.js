define(['backbone', '$', 'underscore'],
function(Backbone, $, _, Student) {

	var TwitterCollection = Backbone.Collection.extend({
		url: function() {
			return 'https://api.twitter.com/1.1/search/tweets.json?q=' + this.subject + '&callback=?';
		},
        parse: function(response) {
            return response.results;
        },
        setSearch: function(subject) {
        	this.subject = subject;
        }
	});

	return new TwitterCollection();
});