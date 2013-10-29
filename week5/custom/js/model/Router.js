define(['backbone', '$', 'underscore', 'model/AppState'],
function(Backbone, $, _, AppState) {

	var Router = Backbone.Router.extend({
		routes: {
			'' : 'home',
			'search(/:id)' : 'home',
			'contact' : 'contact'
		},

		/// Load home state
		home: function(id) {
			if(!id) {
				id = 'flickr';
			}
			AppState.set('searchFilter', id);
			AppState.set('currentState', 'home');
		},

		/// Load students state
		contact: function() {
			AppState.set('currentState', 'contact');
		}
	});

	return new Router();
});