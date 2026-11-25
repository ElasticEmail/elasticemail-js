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
 * Add contacts
 * Example api call that adds new contacts.
 * Pass array with contact details to add up to 1000 contacts.
 * Specify a list name in options or add to all contacts.
 */

const contactsApi = new ElasticEmail.ContactsApi();
const contacts = [{
    Email: "johnsmith@domain.com",
    FirstName: "John",
    LastName: "Smith"
}];

const options = {
    listnames: ["New list"]
};

const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log('Contacts added.');
    }
};
contactsApi.contactsPost(contacts, options, callback);
