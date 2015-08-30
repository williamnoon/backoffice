Template.vehicles4sale.helpers({
  vehicle4SellData: function () {
    return Trades.find({"vehicle.tradeSell": "Sell"});
	  console.log(tradeData);
  },
  vehicle4SellDetail: function () {
	return Trades.findOne(Session.get('curVehicle4Sell'));
}
});
							 
Template.vehicles4sale.events({ 'click a.collection-item': function(e,c){ 
  Session.set('curVehicle4Sell',this._id);

  console.log(Session.get('curVehicle4Sell'));
			  }
});