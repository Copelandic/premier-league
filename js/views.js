var TeamsView = Backbone.View.extend({
	tagName: 'ul',

	render: function() {
		this.collection.each(function(team) {
			var teamView = new TeamView({ model: team });
			this.$el.append(teamView.render().el);
		}, this);

		return this;
	}
});

var TeamView = Backbone.View.extend({
	tagName: 'ul class="team-row"',

	template: template('teamTemplate'),

	render: function() {
		this.$el.html( this.template(this.model.toJSON()) );
		return this;
	}
});

var team = new Team;

var teamView = new TeamView({ model: team });

var teamsView = new TeamsView({ collection: teamCollection });

$('.teams').append(teamsView.render().el);