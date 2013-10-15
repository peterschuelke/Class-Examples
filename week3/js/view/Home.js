/**
 * Home
 * Author: Earl Swigert
 */

define(['backbone', 'underscore', '$', 'text!templates/home.html'], function(Backbone, _, $, template) {
	
	Home = Backbone.View.extend({
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

	return Home;
}

);