/* This simple app uses the '/dictionary/examples' resource to illustrate
how terms in a dictionary are contexutalized. */

/* This template relies on the request module, a simplified and user friendly
way to make HTTP requests. */
const request = require('request');
const uuidv4 = require('uuid/v4');

var key_var = 'TRANSLATOR_TEXT_SUBSCRIPTION_KEY';
if (!process.env[key_var]) {
    throw new Error('Please set/export the following environment variable: ' + key_var);
}
var subscriptionKey = process.env[key_var];
var endpoint_var = 'TRANSLATOR_TEXT_ENDPOINT';
if (!process.env[endpoint_var]) {
    throw new Error('Please set/export the following environment variable: ' + endpoint_var);
}
var endpoint = process.env[endpoint_var];

/* If you encounter any issues with the base_url or path, make sure that you are
using the latest endpoint: https://docs.microsoft.com/en-us/azure/cognitive-services/translator/reference/v3-0-dictionary-examples */
function dictionaryExamples(){
    let options = {
        method: 'POST',
        baseUrl: endpoint,
        url: 'dictionary/examples',
        qs: {
          'api-version': '3.0',
          'from': 'en',
          'to': 'fr'
        },
        headers: {
          'Ocp-Apim-Subscription-Key': subscriptionKey,
          'Content-type': 'application/json',
          'X-ClientTraceId': uuidv4().toString()
        },
        body: [{
            'text': 'great',
            'translation': 'formidable'
        }],
        json: true,
    };

    request(options, function(err, res, body){
        console.log(JSON.stringify(body, null, 4));
    });
};

// Call the function to contextualize results.
dictionaryExamples();
