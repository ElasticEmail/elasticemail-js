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
