/*
* Routes: Authenticated
* Routes that are only visible to authenticated users.
*/

Router.route('/', {
  template: 'index',
  name: 'index',
  loadingTemplate: 'loading',
	 onBeforeAction: function(){
    Session.set('currentRoute', 'dashboard');
	  this.next();
   }
});

Router.route('/applications', {
  template: 'applications',
  name: 'applications',
  loadingTemplate: 'loading',// Optional loading template.
   onBeforeAction: function(){
    Session.set('currentRoute', 'applications');
	  this.next();
   }
});
Router.route('/trades', {
  template: 'trades',
  name: 'trades',
  loadingTemplate: 'loading',// Optional loading template.
   onBeforeAction: function(){
    Session.set('currentRoute', 'trades');
	  this.next();
   }
});
Router.route('/vehicles4sale', {
  template: 'vehicles4sale',
  name: 'vehicles4sale',
  loadingTemplate: 'loading',// Optional loading template.
   onBeforeAction: function(){
    Session.set('currentRoute', 'vehicles4sale');
	  this.next();
   }
});
Router.route('/inventory', {
  template: 'inventory',
  name: 'inventory',
  loadingTemplate: 'loading',// Optional loading template.
   onBeforeAction: function(){
    Session.set('currentRoute', 'inventory');
	   this.next();
   }
});

Router.route('/customers', {
  template: 'customers',
  name: 'customers',
  loadingTemplate: 'loading', // Optional loading template.
   onBeforeAction: function(){
    Session.set('currentRoute', 'customers');
	   this.next();
	  
   }
});









 /*  subscriptions: function(){
    return Meteor.subscribe('examplePublication');
    
    return [
      Meteor.subscribe('examplePublication'),
      Meteor.subscribe('examplePublication2')
    ];
    */
 /*  subscriptions: function(){
    return Meteor.subscribe('examplePublication');
    
    return [
      Meteor.subscribe('examplePublication'),
      Meteor.subscribe('examplePublication2')
    ];
	
	
	
	 waitOn: function() {
    // We can return a single subscription, or an array of subscriptions here.
    return Meteor.subscribe('inventoryItems' );
  }
    */
 