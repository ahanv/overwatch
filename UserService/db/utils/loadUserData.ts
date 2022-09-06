var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
    region: "eu-west-2",
    endpoint: "http://localhost:8000"
});

const user = [{
    "id": 1,
    "type" : "Admin",
    "name" : "Erma Temple",
}]

var docClient = new AWS.DynamoDB.DocumentClient();
console.log("Importing User into DynamoDB. Please wait.");

user.forEach(function(user: { id: any; type: any; name: any; }) {
    console.log(user)

    var params = {
        TableName: "Users",
        Item: {
            "id": user.id,
            "type": user.type,
            "name": user.name,
        }
    };
    docClient.put(params, function(err: any, data: any) {
       if (err) {
           console.error("Unable to add Car", user.name, ". Error JSON:", JSON.stringify(err, null, 2));
       } else {
           console.log("PutItem succeeded:", user.name);
       }
    });
});