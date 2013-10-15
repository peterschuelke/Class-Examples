define(['backbone', '$', 'underscore', 'model/Person'],
function(Backbone, $, _, Person) {

	/**
	 * Extends the PersonModel and allows someone to have a major based on a major code.
	 */
	var Student = Person.extend({
		initialize: function(options) {
			Person.prototype.initialize.apply(this, options);
			var code = options.code || 'foo';
			this.setMajor(code);
		},
		setMajor: function(code) {
			switch(code) {
				case 'wdim': 
					this.set('major', 'Web Design and Interactive Media', {silent: true});
					break;
				case 'foo':
					this.set('major', 'bar', {silent: true});
					break;
				default:
					this.set('major', 'You have no major', {silent:true});
			}
		}
	});

	return Student;

});