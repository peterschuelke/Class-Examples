/**
 * SingleStudentView
 * Author: Earl Swigert
 */

define(['backbone', 'underscore', '$', 'text!templates/singlestudentview.html'], function(Backbone, _, $, template) {
	
	var SingleStudentView = Backbone.View.extend({
		template:_.template(template),
		initialize: function(options) {
			_.bindAll(this, 'initVars', 'render');
			this.initVars(options || {});
			
			this.listenTo(this.model, "change", this.render);

			
		},
		initVars: function(options) {
			if(!this.model) {
				this.model = new Backbone.Model();
			}
			if(options.lexicon) {
				this.model.set(options.lexicon);
			}
		},
		render: function() {
			this.$el.html(this.template(this.model.attributes));
		}
	});

	return SingleStudentView;
}

);