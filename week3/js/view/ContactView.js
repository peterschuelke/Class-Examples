/**
 * ContactView
 * Author: Earl Swigert
 */

define(['backbone', 'underscore', '$', 'text!templates/contact.html', 'view/Home'],
	function(Backbone, _, $, template, Home) {
	
	var ContactView = Home.extend({
		template:_.template(template)
	});

	return ContactView;
}

);