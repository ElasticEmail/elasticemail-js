/* Initialization */
const ElasticEmail = require('@elasticemail/elasticemail-client');

const client = ElasticEmail.ApiClient.instance;

/* Generate and use your API key */
const apikey = client.authentications['apikey'];
apikey.apiKey = "YOUR_API_KEY";

/**
 * Load list
 * Example api call that loads given contacts list.
 */
const listsApi = new ElasticEmail.ListsApi();
const listName = 'Best contacts';

const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log('List loaded', data.ListName);
        console.log('PublicListID', data.PublicListID);
    }
};
listsApi.listsByNameGet(listName, callback);
