define(['backbone', '$', 'underscore', 'model/Student'],
function(Backbone, $, _, Student) {	

	var ClassList = Backbone.Collection.extend({
		model: Student,
		url: 'data/sample.json'
	});

	return new ClassList();
});