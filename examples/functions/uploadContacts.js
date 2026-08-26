/* Initialization */
const ElasticEmail = require('@elasticemail/elasticemail-client');

const client = ElasticEmail.ApiClient.instance;

/* Generate and use your API key */
const apikey = client.authentications['apikey'];
apikey.apiKey = "YOUR_API_KEY";

/**
 * Upload contacts
 * Example api call that adds new contacts by uploading csv file.
 * Required columns in CSV file: Email. 
 * Suggested columns in CSV file: AllowUnsubscribe, Status, ConsentDate, ConsentIP, ConsentTracking.
 * 
 * Example CSV file content:
 * 
 * Email
 * john@johnsmith.com
 */
const fs = require('fs');
const contactsApi = new ElasticEmail.ContactsApi()

const readStream = fs.createReadStream('./files/contacts.csv');

const options = {
    listName: "New list",
    encodingName: 'utf-8',
    file: readStream,
};


const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log('Contacts added.');
    }
};
contactsApi.contactsImportPost(options, callback);
