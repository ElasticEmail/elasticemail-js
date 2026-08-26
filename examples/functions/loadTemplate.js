/* Initialization */
const ElasticEmail = require('@elasticemail/elasticemail-client');

const client = ElasticEmail.ApiClient.instance;

/* Generate and use your API key */
const apikey = client.authentications['apikey'];
apikey.apiKey = "YOUR_API_KEY";

/**
 * Load template
 * Example api call that loads an existing template.
 */
const templatesApi = new ElasticEmail.TemplatesApi();
const templateName = "hello_template";
const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log('Template name', data.Name);
        console.log('Template type', data.TemplateType);
    }
};
templatesApi.templatesByNameGet(templateName, callback);

