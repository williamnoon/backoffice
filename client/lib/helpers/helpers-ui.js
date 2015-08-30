/*
* UI Helpers
* Define UI helpers for common template functionality.
*/

/*
* Current Route
* Return an active class if the currentRoute session variable name
* (set in the appropriate file in /client/routes/) is equal to the name passed
* to the helper in the template.
*/


	 UI.registerHelper('currentRoute', function(route){
  return Session.equals('currentRoute', route) ? 'active' : '';
});
	  
	UI.registerHelper('leadRoute', function(route){
  return Session.equals('leadRoute', route) ? route : '';
});
	UI.registerHelper({
		getTemplate: function(){

   	if (Session.equals( leadRoute, "applications" )) {
		return getTemplate=Session.get(leadRoute);
		console.log(getTemplate);
		  
    } else if (Session.equals( leadRoute,"trades" )) {
      	return getTemplate=Session.get(leadRoute);
		console.log(getTemplate);
		  
    } else  Session.equals( leadRoute,"sell");
		return getTemplate =Session.get(leadRoute);
		  console.log(getTemplate);
}
		} );





// Use UI.registerHelper..


    // dynamically set the data context.
    

    // clear the dynamic template
	