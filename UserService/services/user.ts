import AWS from 'aws-sdk';

export const readUser = async () => {
    AWS.config.update({
    region: "local",
    });

    const userPayload = await run();
    return userPayload;
};

export const run = async () => {
    const docClient = new AWS.DynamoDB.DocumentClient({region: "local", endpoint: "http://localhost:8000"})
    const table = "Users";
    const id = 1;
    const params = {
        TableName: table,
        Key:{
            "id": id
        }
    };
    try {
        return (await docClient.get(params).promise()).Item
    } catch (err) {
        console.error(JSON.stringify(err));
    }
};