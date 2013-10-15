define(['backbone', 'view/MainView', 'model/ClassList'],
function(Backbone, MainView, ClassList) {
	
	function MainController() {

		function init () {
			Backbone.emulateHTTP = true;

			ClassList.fetch({success: function() {
				//View
				MainView.getInstance();
			}});
		}


		var api = {
			init: init
		};

		return api;
	}

	return new MainController();
});