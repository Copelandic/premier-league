var Team = Backbone.Model.extend({
	defaults: {
		name: 'Team Name',
		played: 0,
		won: 0,
		drawn: 0,
		lost: 0,
		goalsFor: 0,
		goalsAgainst: 0
	},

	name: function() {
		return this.get('name');
	},

	points: function() {
		return (this.get('won') * 3) + this.get('drawn');
	},

	goalDifference: function() {
		return (this.get('goalsFor') ) - this.get('goalsAgainst');
	}
});



//this.points = (this.gamesWon * 3) + this.gamesDrawn