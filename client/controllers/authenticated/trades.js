Template.trades.helpers({
  tradeData: function () {
    return Trades.find({});
	  console.log(tradeData);
  },
  tradeDetail: function () {
	return Trades.findOne(Session.get('curTrade'));
},
adminCheck: function() {
	var curUserEmail = Meteor.user().emails[0].address;
	console.log(curUserEmail);
	if(curUserEmail == "williamdeval@gmail.com")
	{ return true;
	 console.log("true");
	}else {
		console.log("false");
		return false;
}
	
	
	
}
});
							 
Template.trades.events({ 
	'click a.collection-item': function(e,c){ 
  Session.set('curTrade',this._id);

  console.log(Session.get('curTrade'));
			  },
	'click a.btn-floating': function(e,c){ 
  var data = {_id: Session.get('curTrade')};
   console.log(data);
  Meteor.call('deleteTrade', data, function(error, result){
	 if (error) {
              console.log('something went wrong');
            self.done();
          } else {
			   console.log(data + "deleted");
			  }
			  });
}
});