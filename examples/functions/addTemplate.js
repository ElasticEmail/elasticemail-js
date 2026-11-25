/* Initialization */
const ElasticEmail = require('@elasticemail/elasticemail-client');

const client = ElasticEmail.ApiClient.instance;

/* Read your API key from the ELASTICEMAIL_API_KEY environment variable */
if (!process.env.ELASTICEMAIL_API_KEY) {
    console.error('Set the ELASTICEMAIL_API_KEY environment variable to your Elastic Email API key.');
    process.exit(1);
}
const apikey = client.authentications['apikey'];
apikey.apiKey = process.env.ELASTICEMAIL_API_KEY;

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
