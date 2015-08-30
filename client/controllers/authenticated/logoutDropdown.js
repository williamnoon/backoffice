Template.logoutDropdown.onRendered(function(){
    // initialize the plugin only when Blaze is done with DOM manipulation
	$( document ).ready(function(){
    $(".dropdown-button").dropdown();
console.log("working");
});
});