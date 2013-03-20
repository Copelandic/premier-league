App.Collections.Teams = Backbone.Collection.extend({
	model: App.Models.Team,

	comparator: function(team) {
		return -team.get("points");
	},

	sort: function(team) {
    	this.comparator = team.get("name");
    }                       
});

var teamCollection = new App.Collections.Teams([
	{
		name: 'Arsenal',
		won: 14,
		drawn: 8,
		lost: 7,
		goalsFor: 55,
		goalsAgainst: 32
	},
	{
		name: 'Aston Villa',
		won: 7,
		drawn: 9,
		lost: 14,
		goalsFor: 31,
		goalsAgainst: 56
	},
	{
		name: 'Chelsea',
		won: 16,
		drawn: 7,
		lost: 6,
		goalsFor: 58,
		goalsAgainst: 30
	},
	{
		name: 'Everton',
		won: 12,
		drawn: 12,
		lost: 5,
		goalsFor: 46,
		goalsAgainst: 35
	},
	{
		name: 'Fulham',
		won: 9,
		drawn: 9,
		lost: 11,
		goalsFor: 40,
		goalsAgainst: 44
	},
	{
		name: 'Liverpool',
		won: 12,
		drawn: 9,
		lost: 9,
		goalsFor: 57,
		goalsAgainst: 39
	},
	{
		name: 'Manchester City',
		won: 17,
		drawn: 8,
		lost: 4,
		goalsFor: 51,
		goalsAgainst: 26
	},
	{
		name: 'Manchester United',
		won: 24,
		drawn: 2,
		lost: 3,
		goalsFor: 69,
		goalsAgainst: 31
	},
	{
		name: 'Newcastle United',
		won: 9,
		drawn: 6,
		lost: 15,
		goalsFor: 41,
		goalsAgainst: 52
	},
	{
		name: 'Norwich City',
		won: 7,
		drawn: 13,
		lost: 10,
		goalsFor: 28,
		goalsAgainst: 46
	},
	{
		name: 'Queens Park Rangers',
		won: 4,
		drawn: 11,
		lost: 15,
		goalsFor: 26,
		goalsAgainst: 48
	},
	{
		name: 'Reading',
		won: 5,
		drawn: 8,
		lost: 17,
		goalsFor: 35,
		goalsAgainst: 57
	},
	{
		name: 'Southampton',
		won: 7,
		drawn: 10,
		lost: 13,
		goalsFor: 42,
		goalsAgainst: 52
	},
	{
		name: 'Stoke City',
		won: 7,
		drawn: 13,
		lost: 10,
		goalsFor: 27,
		goalsAgainst: 35
	},
	{
		name: 'Sunderland',
		won: 7,
		drawn: 10,
		lost: 13,
		goalsFor: 33,
		goalsAgainst: 42
	},
	{
		name: 'Swansea City',
		won: 10,
		drawn: 10,
		lost: 10,
		goalsFor: 40,
		goalsAgainst: 38
	},
	{
		name: 'Tottenham Hotspur',
		won: 16,
		drawn: 6,
		lost: 8,
		goalsFor: 51,
		goalsAgainst: 37
	},
	{
		name: 'West Bromwich Albion',
		won: 13,
		drawn: 5,
		lost: 12,
		goalsFor: 40,
		goalsAgainst: 38
	},
	{
		name: 'West Ham United',
		won: 9,
		drawn: 6,
		lost: 14,
		goalsFor: 32,
		goalsAgainst: 43
	},
	{
		name: 'Wigan Athletic',
		won: 7,
		drawn: 6,
		lost: 16,
		goalsFor: 35,
		goalsAgainst: 56
	}
]);