/* Initialization */
const ElasticEmail = require('@elasticemail/elasticemail-client');

const client = ElasticEmail.ApiClient.instance;

/* Generate and use your API key */
const apikey = client.authentications['apikey'];
apikey.apiKey = "YOUR_API_KEY";

/**
 * Delete contact
 * Example api call that deletes given contact(s).
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
