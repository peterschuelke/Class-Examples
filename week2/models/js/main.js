(function() {

	var Main = function() {

    var person, classList, studentView;

		function init() {

      person = new Student({code:'wdim'});
      person.on('change:name', update);
      person.set('firstName',"Peter");
      person.set('lastName',"Schuelke");
      person.set('age',29);

      console.log(person.get("name"),person.get("major"));

      var classList = new ClassList();
      classList.fetch({success:ready});

      function ready(){
        console.log(classList.length);
        studentView = new StudentView({collection:classList});
        studentView.render();
        $('#main').append(studentView.$el);
      }
      console.log(classList.where({'major':'bar'}));

		}

    function update(m,v){
      console.log(m,v);
    }

		init();
	}

  var Person = Backbone.Model.extend({
    default :{
      firstName: '',
      lastName:'',
      age:''
    },
    initialize: function(options){
      this.listenTo(this,'change',this.updateName);
    },
    updateName: function(){
      this.set('name', this.get('firstName') + " " + this.get('lastName'),{silent: true});
    }
  });

  var Student = Person.extend({
    initialize: function(options){
      Person.prototype.initialize.apply(this,options);
      var code = options.code || 'foo';
      this.setMajor(code);
    },
    setMajor: function(code){
      switch(code){
        case 'wdim':
          this.set('major', "Web Design and Interactive Media",{silent:true});
          break;
        case 'foo':
          this.set('major',"bar",{silent:true});
          break;
        default:
          this.set('major',"You have no major",{silent:true});
      }
    }
  });

  var ClassList = Backbone.Collection.extend({
    model: Student,
    url: 'data/sample.json'
  });

  var StudentView = Backbone.View.extend({
    initialize: function(options){
      this.listenTo(this.collection, 'remove', this.render);
    },
    events: {
      'click .student' : 'display'
    },
    render: function(){
      var self = this;
      this.$el.html("");
      this.$el.append("<ol>");
      this.collection.each(function(student){
        self.$('ol').append("<li class='student'>" + student.get('firstName') + "</li>");
      });

    },
    display: function(e){
      var modelToRemove = this.collection.where({firstName:$(e.target).text()});
      this.collection.remove(modelToRemove);
    }
  });

	var main = new Main();
})()