/* Initialization */
const ElasticEmail = require('@elasticemail/elasticemail-client');

const client = ElasticEmail.ApiClient.instance;

/* Generate and use your API key */
const apikey = client.authentications['apikey'];
apikey.apiKey = "YOUR_API_KEY";

/**
 * Add template
 * Example api call that adds a new template.
 * TemplateScope: "Personal" or "Global"
 */

const templatesApi = new ElasticEmail.TemplatesApi();
const template = {
    Name: 'My new template',
    Subject: 'Default subject',
    Body: [{
        ContentType: 'HTML',
        Charset: 'utf-8',
        Content: 'My template'
    }],
    TemplateScope: 'Personal',
};
const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log('Template name', data.Name);
        console.log('Template type', data.TemplateType);
    }
};
templatesApi.templatesPost(template, callback);
