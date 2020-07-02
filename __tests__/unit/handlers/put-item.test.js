const dynamodb = require('aws-sdk/clients/dynamodb');

const lambda = require('../../../src/handlers/put-item.js');

describe('Test putItemHandler', () => {
    let putSpy;

    beforeAll(() => {
        putSpy = jest.spyOn(dynamodb.DocumentClient.prototype, 'put');
    });

    afterAll(() => {
        putSpy.mockRestore();
    });

    it('should add id to the table', async () => {
        putSpy.mockReturnValue({
            promise: () => Promise.resolve('data'),
        });

        const event = {
            httpMethod: 'POST',
            body: '{"id":"id1","name":"name1"}',
        };

        const result = await lambda.putItemHandler(event);
        const expectedResult = {
            statusCode: 200,
            body: event.body,
        };

        expect(result).toEqual(expectedResult);
    });
});
