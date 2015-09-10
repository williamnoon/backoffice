Template.applications.helpers({
  appData: function () {
    return Applications.find();
  },
  appDetail: function () {
	return Applications.findOne(Session.get('curApp'));
},
  dateOfBirth: function() {
  if (moment) {
    // can use other formats like 'lll' too
	curApp = Session.get('curApp');
	dateOfBirthPointer=Applications.findOne(curApp);
	isoDateFormat= dateOfBirthPointer.personal.DOB;
    return moment(isoDateFormat).format("MMMM Do YYYY");
					} else {
    return Applications.persoanl.DOB;
  }
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
Template.applications.events({ 'click a.collection-item': function(e,c){ 
  Session.set('curApp',this._id);

  console.log(Session.get('curApp'));
			  },
 'click a.btn-floating': function(e,c){ 
  var data = {_id: Session.get('curApp')};
   console.log(data);
  Meteor.call('deleteApplication', data, function(error, result){
	 if (error) {
              console.log('something went wrong');
            self.done();
          } else {
			   console.log(data + "deleted");
			  }
			  });
}});