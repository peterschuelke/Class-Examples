/**
 * Home
 * Author: Earl Swigert
 */

define(['backbone', 'underscore', '$', 'text!templates/home.html', 'model/AppState', 'view/BaseView', 'model/FlickrCollection', 'text!templates/image.html', 'model/TwitterCollection'],
	function(Backbone, _, $, template, AppState, BaseView, FlickrCollection, imageTemplate, TwitterCollection) {
	
	Home = BaseView.extend({
		template:_.template(template),
		events: {
			'click #getSearch': 'doSearch'
		},
		initialize: function(options) {
			_.bindAll(this, 'initVars', 'render');
			this.initVars(options || {});

			this.listenTo(this.model, "change", this.render);
			this.listenTo(AppState, "change:searchFilter", this.show);

		},
		initVars: function(options) {
			if(!this.model) {
				this.model = new Backbone.Model();
			}
			if(options.lexicon) {
				this.model.set(options.lexicon);
			}
		},
		render: function() {
			this.model.set('section', AppState.get('searchFilter'));
			this.$el.html(this.template(this.model.attributes));
			this.$el.fadeOut(0);
		},

		/*--- Actions ---*/

		doSearch: function() {
			switch(AppState.get('searchFilter')) {
				case 'flickr':
					this.getFlickr();
				case 'twitter':
					this.getTwitter();
			}
		},
		getFlickr: function() {
			var self = this, sr = this.$('#search').val();
			if(sr === "") {
				sr = 'puppy';
			}
			FlickrCollection.setSearch(sr);
			FlickrCollection.fetch({success: function() {
				self.addImages();
			}});

			this.$('.term').html("Searching " + sr);
		},
		getTwitter: function() {
			var self = this, sr = this.$('#search').val();
			if(sr === "") {
				sr = 'puppy';
			}
			TwitterCollection.setSearch(sr);
			TwitterCollection.fetch({success: function() {
				console.log(TwitterCollection);
				//self.addTweets();
			}});

			this.$('.term').html("Searching " + sr);
		},

		addImages: function() {
			var $el = this.$('#content'), img = {};

			FlickrCollection.each(function(model, i) {
				img.src = model.get('media').m;
				img.title = model.get('title');
				$el.append(_.template(imageTemplate, img));
			});
		},
		addTweets: function() {
			var $el = this.$('#content'), img = {};

			FlickrCollection.each(function(model, i) {
				img.src = model.get('media').m;
				img.title = model.get('title');
				$el.append(_.template(imageTemplate, img));
			});
		}
	});

	return Home;
}

);