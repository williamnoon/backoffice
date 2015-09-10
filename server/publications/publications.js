

Meteor.publish("Applications", function () {
  return Applications.find();
});
Meteor.publish("Trades", function () {
  return Trades.find();
});