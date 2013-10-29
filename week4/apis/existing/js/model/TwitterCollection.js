define(['backbone', '$', 'underscore'],
function(Backbone, $, _, Student) {

	var TwitterCollection = Backbone.Collection.extend({
		url: function() {
			return 'api/twitter?search=' + this.subject;
		},
        setSearch: function(subject) {
        	this.subject = subject;
        }
	});

	return new TwitterCollection();
});