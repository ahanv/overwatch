import AWS from 'aws-sdk';
import { int } from 'aws-sdk/clients/datapipeline';

export class User {
    id?: int;
    name: string;
    type: string;
}

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

export const updateUser = async (id: string, user: User) => {
    AWS.config.update({
        region: "local",
    });

    let userPayload = {};
    const docClient = new AWS.DynamoDB.DocumentClient({region: "local", endpoint: "http://localhost:8000"})
    const table = "Users";
    const params = {
        TableName: table,
        Key:{
            "id": Number(id)
        },
        UpdateExpression: 'set #a = :a, #b = :b',
        ExpressionAttributeNames: {
            '#a' : 'name',
            '#b' : 'type'
        },
        ExpressionAttributeValues: {
            ':a' : `${user.name}`,
            ':b' : `${user.type}`
        }
    };
    try {
        userPayload = (await docClient.update(params).promise())
    } catch (err) {
        console.error(JSON.stringify(err));
    };

    return userPayload;
};

export const createUser = async (user: User) => {
    AWS.config.update({
        region: "local",
    });

    let userPayload = {};
    const newId = Math.random();
    const docClient = new AWS.DynamoDB.DocumentClient({region: "local", endpoint: "http://localhost:8000"})
    const table = "Users";
    const params = {
        TableName: table,
        Item: {
            "id": newId,
            "type": user.type,
            "name": user.name,
        }
    };
    try {
        userPayload = (await docClient.put(params).promise())
    } catch (err) {
        console.error(JSON.stringify(err));
    };

    return userPayload;
};