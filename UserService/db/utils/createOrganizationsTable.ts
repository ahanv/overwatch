const AWS = require("aws-sdk");

export const createOrganizationsTable = async () => {
    AWS.config.update({
        region: "local",
        endpoint: "http://localhost:8000"
      });
      
    var dynamodb = new AWS.DynamoDB();
    var params = {
        TableName : "Organizations",
        KeySchema: [
            { AttributeName: "id", KeyType: "HASH"},  //Partition key
    ],
        AttributeDefinitions: [
            { AttributeName: "id", AttributeType: "N" },
    ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 5,
            WriteCapacityUnits: 5
        }
    };
    dynamodb.createTable(params, function(err: any, data: any) {
        if (err) {
            console.error("Error JSON.", JSON.stringify(err, null, 2));
        } else {
            console.log("Created table.", JSON.stringify(data, null, 2));
        }
    });
  };