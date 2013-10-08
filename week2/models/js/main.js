(function() {

	var Main = function() {

		var person, classList, studentView;

		function init() {

			// Creating a single student
			person = new Student({code:'wdim'});
			person.set('firstName', 'Earl');
			person.set('lastName', 'Swigert');
			person.set('age', 34);

			console.log(person.get('name'), person.get('major'));

			classList = new ClassList();

			// Tells the classList to load the json file in the 'url' of the Collection
			classList.fetch({success:ready});

		}

		function update(model, value) {
			//console.log(model, value);
		}

		function ready() {
			studentView = new StudentsView({collection:classList});
			studentView.render();
			$("#main").append(studentView.$el);
		}

		init();
	}

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

	var ClassList = Backbone.Collection.extend({
		model: Student,
		url: 'data/sample.json'
	});

	var StudentsView = Backbone.View.extend({
		initialize: function() {
			this.views = [];
		},
		/**
		 * Renders the student view.  Resets the $el's html and adds a StudentView for each model.
		 */
		render: function() {
			var self = this
			this.$el.html("<ol/>");
			this.collection.each(function(student) {
				var view = new StudentView({	
					model: student
				});
				self.views.push(view);
				self.$('ol').append(view.$el);
			});
		}
	})

	var StudentView = Backbone.View.extend({
		tagName: "li",  // By default all views have a div associated with them, this changes it to be an <li> instead
		className: "person", // CSS class name to add to the <li>
		// Events hash to create interactivity for our view
		events: {
			'click .close': 'onCloseClick'
		},
		initialize: function(options) {
			this.listenTo(this.model, 'destroy', this.remove);  // if the model is destroyed, remove the view
			this.listenTo(this.model, 'change', this.render);  // if the model changes, render it again
			this.render();
		},
		/**
		 * Creates the DOM element for our view
		 */
		render: function() {
			this.$el.html("<span class='name'>" + this.model.get('name') + "</span>, Age " + this.model.get('age') + ", <span title='" + this.model.get('major') + "'>" + this.model.get('code') + "</span><a href class='close'>remove</a>");
		},
		/**
		 * This function first when the click event first on the .close tag.
		 * It destroyes the model of the view.  Because the view is listening for the destroy event, the view calls
		 * it's own remove function when the model is destroyed.  This eans auto updating views.
		 */
		onCloseClick: function() {
			this.model.destroy();
			return false;  // return false keeps the default click action from continuing for the anchor tag
		}
	});
	



	var main = new Main();
})()