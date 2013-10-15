/**
 * BaseView
 * Author: Earl Swigert
 */

define(['backbone', 'underscore', '$'], function(Backbone, _, $) {
	
	var BaseView = Backbone.View.extend({
		hide: function() {
			this.$el.slideUp();
		},
		show: function() {
			this.$el.slideDown();
		}
	});

	return BaseView;
}

);