require.config({

	paths : {
		/** core dependencies **/
		'json2' : 'libs/json2',
		'$' : 'libs/jquery',
		'underscore' : 'libs/underscore',
		'backbone' : 'libs/backbone',

		/** components & prototyping **/
		'bootstrap' : 'libs/bootstrap.min',
		//'datepicker' : 'libs/bootstrap/bootstrap-datepicker',
		//'slider' : 'libs/bootstrap/bootstrap-slider',

		/** requirejs plugins **/
		'text' : 'libs/text',
		'i18n' : 'libs/i18n'
	},

	shim: {
		/** core dependencies **/
		'$' : {
			exports : '$'
		},
		'underscore': {
			exports : '_'
		},
		'backbone': {
			deps : ['underscore', '$', 'json2'],
			exports : 'Backbone'
		},

		/** components & prototyping **/
		'bootstrap' : {
			deps : ['$']
		}
	},

	callback : function(){
		require(['$', 'controller/MainController'],
			
		function( $, Controller) {
			$(document).ready(function() {
							
				//-- startup app
				Controller.init();
			});
		});
	}
});