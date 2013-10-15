/**
 * StudentsView
 * Author: Earl Swigert
 */

define(['backbone', 'underscore', '$', 'text!templates/students.html', 'view/StudentView', 'view/BaseView', 'model/ClassList'], 
	function(Backbone, _, $, template, StudentView, BaseView, ClassList) {
	
	StudentsView = BaseView.extend({
		template:_.template(template),
		initialize: function(options) {
			_.bindAll(this, 'render');
			this.collection = ClassList;		
			this.views = [];
			
		},
		render: function() {
			this.$el.html(this.template({}));
			this.$el.fadeOut(0);
			var self = this;
			this.collection.each(function(student) {
				var view = new StudentView({	
					model: student
				});
				self.views.push(view);
				self.$('tbody').append(view.$el);
			});
		}
	});

	return StudentsView;
}

);