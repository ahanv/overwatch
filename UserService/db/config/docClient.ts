import AWS from 'aws-sdk';

export const docClient = new AWS.DynamoDB.DocumentClient({
    region: "local", endpoint: "http://localhost:8000"
});