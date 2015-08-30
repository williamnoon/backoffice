

Template.sideNav.onRendered(function(){
    // initialize the plugin only when Blaze is done with DOM manipulation
	$( document ).ready(function(){
    $(".button-collapse").sideNav({
   closeOnClick: true
  });
console.log("working");
});
});