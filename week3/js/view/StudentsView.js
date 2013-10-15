/**
 * StudentsView
 * Author: Earl Swigert
 */

define(['backbone', 'underscore', '$', 'text!templates/students.html', 'view/StudentView'], 
	function(Backbone, _, $, template, StudentView) {
	
	StudentsView = Backbone.View.extend({
		template:_.template(template),
		initialize: function(options) {
			_.bindAll(this, 'render');
			
			this.views = [];
			
		},
		render: function() {
			var self = this
			this.$('#studentList').html("<ol/>");
			this.collection.each(function(student) {
				var view = new StudentView({	
					model: student
				});
				self.views.push(view);
				self.$('ol').append(view.$el);
			});
		}
	});

	return StudentsView;
}

);