define(['$', 'model/AppState', 'view/Home'], 
	function($, AppState, Home, StudentsView) {

	function RouterManager($cont) {

		AppState.on('change:currentState', loadNewState);
		
		var home = new Home();
		home.render();

		var currentState = null;

		function loadNewState(m, newState) {
			console.log('new state');
			switch(newState) {
				case 'home' :
					changeState(home);
					break;
			}
		}

		function changeState(newState) {
			if(currentState) {
				currentState.hide();
			}
			currentState = newState;
			$cont.append(currentState.$el);
			currentState.show();
		}
	}

	return RouterManager;
});