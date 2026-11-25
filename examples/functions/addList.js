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
