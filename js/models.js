App.Models.Team = Backbone.Model.extend({
	defaults: {
		name: 'Team Name',
		won: 0,
		drawn: 0,
		lost: 0,
		goalsFor: 0,
		goalsAgainst: 0
	},

	initialize: function() {
		this.set('points', this.points() );
		this.set('goalDifference', this.goalDifference() );
		this.set('played', this.played() );
	},

	name: function() {
		return this.get('name');
	},

	played: function() {
		return (this.get('won') ) + this.get('drawn') + this.get('lost');
	},

	points: function() {
		return (this.get('won') * 3) + this.get('drawn');
	},

	goalDifference: function() {
		return (this.get('goalsFor') ) - this.get('goalsAgainst');
	}
});

//this.points = (this.gamesWon * 3) + this.gamesDrawn