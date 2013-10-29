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
			var setup = new EaselSetup(this.$('#testCanvas'), 960, 600);
			this.stage = setup.stage;
			AppState.set('Stage', setup.stage);
			this.draw();
		},

		/*--- Actions ---*/

		draw: function() {
			var s = this.stage;

			var circle = new createjs.Shape();
			circle.graphics.beginFill("red").drawCircle(40, 40, 40);
			circle.graphics.beginFill("blue").drawRect(0, 0 , 100, 40);
			circle.graphics.beginStroke("#333").moveTo(0, 0).lineTo(10, 10).lineTo(50,50);
			circle.regX = 40;
			circle.regY = 40;
			circle.x = circle.y = 50;

			s.addChild(circle);
		}
	});

	return Home;
}

);