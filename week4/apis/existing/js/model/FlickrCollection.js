define(['backbone', '$', 'underscore'],
function(Backbone, $, _, Student) {

	var FlickrCollection = Backbone.Collection.extend({
		url: function() {
			return 'http://api.flickr.com/services/feeds/photos_public.gne?tags=' + this.tag + '&tagmode=any&format=json&jsoncallback=?';
		},
        parse: function(response) {
            return response.items;
        },
        setSearch: function(tag) {
        	this.tag = tag;
        }
	});

	return new FlickrCollection();
});