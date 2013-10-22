define(['$', 'underscore', 'model/Router', 'controller/RouteManager'],
function($, _, Router, RouteManager) {
	
	function MainView() {
		var content, $el;
		$el = $('#contentMain');

		var routerManager = new RouteManager($el);

		Backbone.history.start();
		//Router.navigate('test', {trigger: true});
	}

	/**
	 * A singleton pattern in javascript - 
	 * Globaly accessible and only one can every be created
	 */
	var singleton = {
		getInstance : function(){
			return singleton.instance || (singleton.instance = new MainView());
		}
	};
	
	return singleton;
});