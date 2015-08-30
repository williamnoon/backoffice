Applications = Meteor.subscribe('Applications', function(){
				 return applications.find();
});
Trades = Meteor.subscribe('Trades', function(){
				 return trades.find();
});