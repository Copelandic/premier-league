App.Views.Teams = Backbone.View.extend({
	className: 'teams',
	container: template('containerTemplate'),
	
	render: function() {
		this.collection.each(function(team) {
			var teamView = new App.Views.Team({ model: team });
			this.$el.append(teamView.render().el);
		}, this);

		return this;
	},
	events : {
		'click .options' : 'sort'
	},

	sort : function( event ) {
		var type = $(event.target).attr('data-type');
		this.collection.sortedBy( type ).sort();
	},
	initialize : function() {
		this.listenTo( this.collection, 'reset', this.render );
		this.$el.render( this.container, this.render );
	}
});

App.Views.Team = Backbone.View.extend({
	tagName: 'ul class="team-row"',
	template: template('teamTemplate'),
	header: template('headerTemplate'),

	render: function() {
		this.$el.html( this.header(this.model.toJSON()) );
		return this;
		this.$el.html( this.template(this.model.toJSON()) );
		return this;
	}
});

var team = new App.Models.Team;

var teamView = new App.Views.Team({ model: team });

var teamsView = new App.Views.Teams({ collection: teamCollection });

$('.teams').append(teamsView.render().el);