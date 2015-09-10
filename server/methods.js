Meteor.methods({
  applicationInsertMethod: function(argument){
    // Check the argument. Assuming an Object type here.
    check(argument, Object);

    // Perform the insert.
    try {
      var exampleId = Applications.insert(argument);
      return exampleId;
    } catch(exception) {
      // If an error occurs, return it to the client.
      return exception;
    }
  }
});


Meteor.methods({
  tradeInsertMethod: function(argument){
    // Check the argument. Assuming an Object type here.
    check(argument, Object);

    // Perform the insert.
    try {
      var exampleId = Trades.insert(argument);
      return exampleId;
    } catch(exception) {
      // If an error occurs, return it to the client.
      return exception;
    }
  }
});


Meteor.methods({
  deleteApplication: function(argument){
    // Check the argument. Assuming an Object type here.
    check(argument, Object);
    // Perform the insert.
      return Applications.remove(argument._id);
    }
  }
);

Meteor.methods({
  deleteTrade: function(argument){
    // Check the argument. Assuming an Object type here.
    check(argument, Object);
    // Perform the insert.
      return Trades.remove(argument._id);
    }
  }
);