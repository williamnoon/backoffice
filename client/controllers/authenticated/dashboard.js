Template.index.helpers({
   appCount: function () {
    return Applications.find().count();
  },
	tradeCount: function () {
    return Trades.find().count();
  },
})