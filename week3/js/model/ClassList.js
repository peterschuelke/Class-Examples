define(['backbone', '$', 'underscore'],
function(Backbone, $, _) {	

	var ClassList = Backbone.Collection.extend({
		model: Student,
		url: 'data/sample.json'
	});

	return ClassList;
});