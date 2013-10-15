/**
 * StudentView
 * Author: Earl Swigert
 */

define(['backbone', 'underscore', '$', 'text!templates/student.html'], function(Backbone, _, $, template) {
	
	var StudentView = Backbone.View.extend({
		template:_.template(template),
		tagName: "li",  // By default all views have a div associated with them, this changes it to be an <li> instead
		className: "person", // CSS class name to add to the <li>
		// Events hash to create interactivity for our view
		events: {
			'click .close': 'onCloseClick'
		},
		initialize: function(options) {
			_.bindAll(this, 'initVars', 'render');
			this.initVars(options || {});
			
			this.listenTo(this.model, 'destroy', this.remove);  // if the model is destroyed, remove the view
			this.listenTo(this.model, 'change', this.render);  // if the model changes, render it again
			this.render();

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
		},
		/**
		 * This function first when the click event first on the .close tag.
		 * It destroyes the model of the view.  Because the view is listening for the destroy event, the view calls
		 * it's own remove function when the model is destroyed.  This eans auto updating views.
		 */
		onCloseClick: function() {
			this.model.destroy();
			return false;  // return false keeps the default click action from continuing for the anchor tag
		}
	});
	

	return StudentView;
}

);