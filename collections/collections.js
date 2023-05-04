Applicant = function (doc) {
  _.extend(this, doc);
};

Applicant.prototype = {
  constructor: Applicant,

  makeFirstLastCaps: function()
{
    return this.personal.firstName.toUpperCase();

}
  };


conn = DDP.connect("http://localhost:3000");
Applications = new Mongo.Collection("applications");
Trades = new Mongo.Collection("trades");




