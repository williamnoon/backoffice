Applications = new Mongo.Collection('applications', {
  connection: DDP.connect('www.wholesalecars.deals')
});

Trades = new Mongo.Collection('trades', {
  connection: DDP.connect('www.wholesalecars.deals')
});