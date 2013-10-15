define(['backbone', 'view/MainView'],
function(Backbone, MainView) {
	
	function MainController() {

		function init () {
			Backbone.emulateHTTP = true;

			//View
			MainView.getInstance();
		}

		var api = {
			init: init
		};

		return api;
	}

	return new MainController();
});