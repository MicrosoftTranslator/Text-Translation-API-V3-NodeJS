/* This simple app uses the '/dictionary/examples' resource to illustrate
how terms in a dictionary are contexutalized. */

/* This template relies on the request module, a simplified and user friendly
way to make HTTP requests. */
const request = require('request');
const uuidv4 = require('uuid/v4');

/* Checks to see if the subscription key is available
as an environment variable. If you are setting your subscription key as a
string, then comment these lines out.

If you want to set your subscription key as a string, replace the value for
the Ocp-Apim-Subscription-Key header as a string. */
const subscriptionKey = process.env.YOUR_ENV_VARIABLE;
if (!subscriptionKey) {
  throw new Error('Environment variable for your subscription key is not set.')
};

/* If you encounter any issues with the base_url or path, make sure that you are
using the latest endpoint: https://docs.microsoft.com/en-us/azure/cognitive-services/translator/reference/v3-0-dictionary-examples */
function dictionaryExamples(){
    const options = {
        method: 'POST',
        baseUrl: 'https://api.cognitive.microsofttranslator.com/',
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
