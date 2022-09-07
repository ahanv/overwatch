import AWS from 'aws-sdk';

export const readUser = async (id: string) => {
    AWS.config.update({
    region: "local",
    });

    const userPayload = await getRecord(id);
    return userPayload;
};

export const getRecord = async (id: string) => {
    const docClient = new AWS.DynamoDB.DocumentClient({region: "local", endpoint: "http://localhost:8000"})
    const table = "Users";
    // const id = 1;
    const params = {
        TableName: table,
        Key:{
            "id": Number(id)
        }
    };
    try {
        return (await docClient.get(params).promise()).Item
    } catch (err) {
        console.error(JSON.stringify(err));
    }
};