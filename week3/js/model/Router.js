define(['backbone', '$', 'underscore', 'model/AppState'], 
function(Backbone, $, _, AppState) {

	var Router = Backbone.Router.extend({
		routes: {
			'' : 'home',
			'home' : 'home',
			'students' : 'students',
			'contact' : 'contact'
		},

		/// Load home state
		home: function() {
			AppState.set('currentState', 'home');
		},

		/// Load students state
		students: function() {
			AppState.set('currentState', 'students');
		},

		/// Load contact state
		contact: function() {
			AppState.set('currentState', 'contact');
		}
	});

	return new Router;
});