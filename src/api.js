/**
 * POST /v4/{brand}/create-token
 * @description Generates client token to work on UI sdk
 * @pathParam {string} brand - Brand key
 * @response 200 - OK
 */
const createToken = async () => {
    return {
        statusCode: 200,
        headers: {},
        body: '',
    };
};

export { createToken };