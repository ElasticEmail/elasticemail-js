/* Initialization */
const ElasticEmail = require('@elasticemail/elasticemail-client');

const client = ElasticEmail.ApiClient.instance;

/* Generate and use your API key */
const apikey = client.authentications['apikey'];
apikey.apiKey = "YOUR_API_KEY";

/**
 * Delete template
 * Example api call that deletes existing template.
 */

const templatesApi = new ElasticEmail.TemplatesApi();
const templateName = 'My new template';
const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log('Template deleted.');
    }
};
templatesApi.templatesByNameDelete(templateName, callback);
