/* Initialization */
const ElasticEmail = require('@elasticemail/elasticemail-client');

const client = ElasticEmail.ApiClient.instance;

/* Generate and use your API key */
const apikey = client.authentications['apikey'];
apikey.apiKey = "YOUR_API_KEY";

/**
 * Export contacts
 * Example api call that exports selected contacts to downloadable file.
 * Options:
 * fileFormat: "Csv" "Xml" "Json" – Format of the exported file
 * rule: rule=Status%20=%20Engaged – Query used for filtering.
 * emails: [mail@contact.com,mail1@contact.com,mail2@contact.com] – Array of contact emails
 * compressionFormat: "None" "Zip"
 * fileName=filename.txt – Name of your file including extension.
 */

const contactsApi = new ElasticEmail.ContactsApi()
const options = {
    fileFormat: 'Csv',
    emails: ["johnsmith@domain.com"],
    fileName: 'exported.csv'
};

const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log('Contacts exported');
        console.log('Link', data.Link);
    }
};
contactsApi.contactsExportPost(options, callback);
