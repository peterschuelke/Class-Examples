define(['$', 'underscore', 'view/Home'],
function($, _) {
	
	function MainView() {
		var content, $el;
		$el = $('#contentMain');
		//$el.append(_.template($("#homeTemplate").html(), {}));
		var home = new Home();
		home.render();
		$el.html(home.$el);

	}

	var singleton = {
		getInstance : function(){
			return singleton.instance || (singleton.instance = new MainView());
		}
	};
	
	return singleton;
});