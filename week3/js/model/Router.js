define(['backbone', '$', 'underscore', 'model/AppState'], 
function(Backbone, $, _, AppState) {

	var Router = Backbone.Router.extend({
		routes: {
			'' : 'home',
			'home' : 'home',
			'students' : 'students'
		},

		/// Load home state
		home: function() {
			AppState.set('currentState', 'home');
		},

		/// Load students state
		students: function() {
			AppState.set('currentState', 'students');
		}
	});

	return new Router;
});