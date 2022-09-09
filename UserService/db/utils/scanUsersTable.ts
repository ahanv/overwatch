    // Load the AWS SDK for Node.js.
    var AWS = require("aws-sdk");
    // Set the AWS Region.
    AWS.config.update({
        region: "local",
        endpoint: "http://localhost:8000"
    });
    
    // Create DynamoDB service object.
    var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });
    
    const params = {
      // Specify which items in the results are returned.
      // FilterExpression: "Subtitle = :topic AND Season = :s AND Episode = :e",
      // Define the expression attribute value, which are substitutes for the values you want to compare.
      /* ExpressionAttributeValues: {
        ":topic": {S: "SubTitle2"},
        ":s": {N: 1},
        ":e": {N: 2},
      }, */
      // Set the projection expression, which are the attributes that you want.
      // ProjectionExpression: "Id, Name, Type",
      TableName: "Users",
    };
    
    ddb.scan(params, function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data);
        data.Items.forEach(function (element, index, array) {
          console.log(
              "printing",
              "Name: " + JSON.stringify(element.name) + " | Type: " + JSON.stringify(element.type) + " | Id: " + JSON.stringify(element.id) + ""
          );
        });
      }
    });
    
    