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
 * Delete contacts
 * Example api call that deletes contacts in bulk, by a list of email addresses.
 */

const contactsApi = new ElasticEmail.ContactsApi()
const contacts = {
    Emails: ["johnsmith@domain.com"]
};

const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log('Contacts deleted.');
    }
};
contactsApi.contactsDeletePost(contacts, callback);
