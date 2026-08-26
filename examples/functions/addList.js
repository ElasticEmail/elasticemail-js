/* Initialization */
const ElasticEmail = require('@elasticemail/elasticemail-client');

const client = ElasticEmail.ApiClient.instance;

/* Generate and use your API key */
const apikey = client.authentications['apikey'];
apikey.apiKey = "YOUR_API_KEY";

/**
 * Add list
 * Example api call that creates a new contacts list.
 * Emails – An array of existing contact emails that should be added to this list. Leave empty for all contacts
 */
const listsApi = new ElasticEmail.ListsApi();
const listData = {
    ListName: "Best contacts",
    AllowUnsubscribe: true,
    Emails: ["johnsmith@domain.com"]
};

const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log('List added.');
    }
};
listsApi.listsPost(listData, callback);
