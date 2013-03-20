App.Views.Teams = Backbone.View.extend({
	className: 'teams',
	header: template('headerTemplate'),

	initialize : function() {
		this.listenTo( this.collection, 'reset', this.render );
		this.$el.html( this.header() );
	},

	render: function() {
		this.collection.each(function(team) {
			var teamView = new App.Views.Team({ model: team });
			this.$el.append(teamView.render().el);
		}, this);

		return this;
	},
	events : {
		'click .option' : 'sortBy'
	},

	sortBy : function(event) {
		var type = $(event.target).attr('data-type');
		alert(type);
		this.collection.sort(type);
	}
});

App.Views.Team = Backbone.View.extend({
	tagName: 'ul',
	className: 'team-row',
	template: template('teamTemplate'),

	render: function() {
		this.$el.html( this.template(this.model.toJSON()) );
		return this;
	}
});

var team = new App.Models.Team;

var teamView = new App.Views.Team({ model: team });

var teamsView = new App.Views.Teams({ collection: teamCollection });

$('body').append(teamsView.render().el);