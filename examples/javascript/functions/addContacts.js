/* Initialization */
const ElasticEmail = require('@elasticemail/elasticemail-client');

const client = ElasticEmail.ApiClient.instance;

/* Generate and use your API key */
const apikey = client.authentications['apikey'];
apikey.apiKey = "YOUR_API_KEY";

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
