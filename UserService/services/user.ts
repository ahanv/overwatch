var AWS = require("aws-sdk");
import { DynamoDBClient, GetItemCommand, GetItemCommandInput } from "@aws-sdk/client-dynamodb";

export const readUser = async (): Promise<{ id: any; type: any; name: any; }> => {
    console.log('****TEST 3****');
    AWS.config.update({
    region: "local",
    endpoint: "http://localhost:8000"
    });

    let userPayload: {Item: { id: any; type: any; name: any; }} = {"Item": { "id": "999", "type": "init", "name": "Initial Rec" }};

    console.log('****TEST 4****');
    userPayload = await run();
    console.log('*****HEY*******', userPayload);
    return userPayload.Item;
};

export const run = async (): Promise<{Item: { id: any; type: any; name: any; }}> => {
    const docClient = new AWS.DynamoDB.DocumentClient()
    const table = "Users";
    const id = 1;
    const params = {
        TableName: table,
        Key:{
            "id": id
        }
    };
    console.log('******TEST 4.2*******');
    try {
        await docClient.get(params, function(err: any, data: any) {
            if (err) {
                console.log('********TEST 4.2.1*******')
                console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                console.log('****TEST 5****');
                console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
                return data;
            }
        })
    } catch (err) {
        console.log("********TEST 4.3*******")
        return {Item: { id: "error", type: "error", name: "error", }};
    }
};