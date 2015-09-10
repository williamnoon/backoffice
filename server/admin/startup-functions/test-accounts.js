/*
* Generate Test Accounts
* Creates a collection of test accounts automatically on startup.
*/

generateTestAccounts = function(){
  // Create an array of user accounts.
  var users = [
    { name: "user", email: "rasheed@wholesalecars.deals", password: "Farrah999" },
	{ name: "Admin", email: "williamdeval@gmail.com", password: "800mafia" }
	  
  ]

  // Loop through array of user accounts.
  for(i=0; i < users.length; i++){
    // Check if the user already exists in the DB.
    var userEmail = users[i].email,
        checkUser = Meteor.users.findOne({"emails.address": userEmail});

    // If an existing user is not found, create the account.
    if ( !checkUser ) {
      Accounts.createUser({
        email: userEmail,
        password: users[i].password,
        profile: {
          name: users[i].name
        }
      });
    }
  }
}
 