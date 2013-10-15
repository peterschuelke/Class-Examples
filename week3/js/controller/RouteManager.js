define(['$', 'model/AppState', 'view/Home', 'view/StudentsView'], 
	function($, AppState, Home, StudentsView) {

	function RouterManager($cont) {

		AppState.on('change:currentState', loadNewState);
		
		var home = new Home();
		home.render();

		var studentsView = new StudentsView();
		studentsView.render();

		var currentState = null;

		function loadNewState(m, newState) {
			switch(newState) {
				case 'home' :
					changeState(home);
					break;
				case 'students' : 
					changeState(studentsView);
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