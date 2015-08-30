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
}
							 
							  });
Template.applications.events({ 'click a.collection-item': function(e,c){ 
  Session.set('curApp',this._id);

  console.log(Session.get('curApp'));
			  }
});