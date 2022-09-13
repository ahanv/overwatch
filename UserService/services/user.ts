import AWS from 'aws-sdk';
import { int } from 'aws-sdk/clients/datapipeline';
import { docClient } from '../db/config/docClient';

export class User {
    id?: int;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
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
    const table = "Users";
    const params = {
        TableName: table,
        Key:{
            "id": Number(id)
        },
        UpdateExpression: 'set #a = :a, #b = :b, #c = :c, #d = :d, #e = :e',
        ExpressionAttributeNames: {
            '#a' : 'firstName',
            '#b' : 'lastName',
            '#c' : 'email',
            '#d' : 'password',
            '#e' : 'type'
        },
        ExpressionAttributeValues: {
            ':a' : `${user.firstName}`,
            ':b' : `${user.lastName}`,
            ':c' : `${user.email}`,
            ':d' : `${user.password}`,
            ':e' : `${user.type}`
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
    const newId = Math.floor(Math.random() * 100000);
    const table = "Users";
    const params = {
        TableName: table,
        Item: {
            "id": newId,
            "type": user.type,
            "firstName": user.firstName,
            "lastName": user.lastName,
            "email": user.email,
            "password": user.password
        }
    };
    try {
        userPayload = (await docClient.put(params).promise())
    } catch (err) {
        console.error(JSON.stringify(err));
    };

    return userPayload;
};

export const readManyUsers = async () => {
    AWS.config.update({
        region: "local",
    });

    let returnPayload: {}[] = [];
    const params = {
      TableName: "Users",
    };
    try {
        const userPayload = (await docClient.scan(params).promise())
        userPayload.Items.forEach(async (element: { [x: string]: any; }) => {
            const result = AWS.DynamoDB.Converter.unmarshall(element);
            for (const k in result) {
                result[k] = element[k]
            }
            returnPayload.push(result);
        });
    } catch (err) {
        console.error(JSON.stringify(err));
    };

    return returnPayload;
};

export const deleteUser = async (id: string) => {
    AWS.config.update({
        region: "local",
    });

    let userPayload = {};
    const table = "Users";
    const params = {
        TableName: table,
        Key:{
            "id": Number(id)
        }
    };
    try {
        userPayload = (await docClient.delete(params).promise())
    } catch (err) {
        console.error(JSON.stringify(err));
    };

    return userPayload;
};