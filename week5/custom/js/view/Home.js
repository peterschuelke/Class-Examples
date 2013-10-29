/**
 * Home
 * Author: Earl Swigert
 */

define(['backbone', 'underscore', '$', 'text!templates/home.html', 'model/AppState', 'view/BaseView', 'view/easel/Setup'],
	function(Backbone, _, $, template, AppState, BaseView, EaselSetup) {
	
	Home = BaseView.extend({
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
			//this.$el.fadeOut(0);
			var setup = new EaselSetup(this.$('#testCanvas'));
		}

		/*--- Actions ---*/
	});

	return Home;
}

);