conn = DDP.connect("www.wholesalecars.deals");
Applications = new Mongo.Collection("applications",conn);
conn.subscribe("applications");
Trades = new Mongo.Collection("trades",conn);
conn.subscribe("trades");

Meteor.publish("applications", function () {
  return applications.find();
});
Meteor.publish("trades", function () {
  return trades.find();
});