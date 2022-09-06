var AWS = require("aws-sdk");

export const readOrganization = async () => {
    AWS.config.update({
    region: "local",
    endpoint: "http://localhost:8000"
    });

    var docClient = new AWS.DynamoDB.DocumentClient()
    var table = "Organization";
    var id = 1;
    var params = {
        TableName: table,
        Key:{
            "id": id
        }
    };
    docClient.get(params, function(err: any, data: any) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
        }
    });
};