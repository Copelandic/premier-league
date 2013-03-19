App.Views.Teams = Backbone.View.extend({
	tagName: 'ul',

	render: function() {
		this.collection.each(function(team) {
			var teamView = new App.Views.Team({ model: team });
			this.$el.append(teamView.render().el);
		}, this);

		return this;
	}
});

App.Views.Team = Backbone.View.extend({
	tagName: 'ul class="team-row"',

	template: template('teamTemplate'),

	render: function() {
		this.$el.html( this.template(this.model.toJSON()) );
		return this;
	}
});

var team = new App.Models.Team;

var teamView = new App.Views.Team({ model: team });

var teamsView = new App.Views.Teams({ collection: teamCollection });

$('.teams').append(teamsView.render().el);
