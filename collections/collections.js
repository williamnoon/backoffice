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


conn = DDP.connect("www.wholesalecars.deals");
Applications = new Mongo.Collection("applications");
Trades = new Mongo.Collection("trades");




