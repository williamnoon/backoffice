Template.trades.helpers({
  tradeData: function () {
    return Trades.find({"vehicle.tradeSell": "Trade"});
	  console.log(tradeData);
  },
  tradeDetail: function () {
	return Trades.findOne(Session.get('curTrade'));
}
});
							 
Template.trades.events({ 'click a.collection-item': function(e,c){ 
  Session.set('curTrade',this._id);

  console.log(Session.get('curTrade'));
			  }
});