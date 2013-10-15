define(['backbone', '$', 'underscore'],
function(Backbone, $, _) {

	/**
	 * The basis of any Person in the application.
	 */
	var Person = Backbone.Model.extend({
		default: {
			firstName: '',
			lastName: '',
			age: ''
		},
		initialize: function(options) {
			this.listenTo(this, 'change', this.updateName);
			this.updateName();
		},
		updateName: function() {
			this.set('name', this.get('firstName') + " " + this.get('lastName'), {silent: true});
		}
	});

	return Person;
});