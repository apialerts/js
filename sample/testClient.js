const Client = require('../src/classes/client');

// use an environment variable to store the API Key
const apiKey = process.env.APIALERTS_API_KEY;

if (!apiKey) {
    // throw an error if the API Key is not set
    throw new Error('API Key is required')
}

const client = new Client()
client.setApiKey(apiKey) // not required as we are using the APIALERTS_API_KEY environment variable

function sendAlert(event) {
    client.send(event)
}

module.exports = { sendAlert }