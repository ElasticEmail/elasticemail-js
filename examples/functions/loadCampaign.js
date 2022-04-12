/* Initialization */
const ElasticEmail = require('@elasticemail/elasticemail-client');

const client = ElasticEmail.ApiClient.instance;

/* Generate and use your API key */
const apikey = client.authentications['apikey'];
apikey.apiKey = "YOUR_API_KEY";

/**
 * Load Campaign
 * Example api call that fetches details about single campaign like: name, status, recipients, subject etc.
 */
const campaignsApi = new ElasticEmail.CampaignsApi()
const campaignName = "example";

const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log('Campaign name', data.Name);
        console.log('Campaign status', data.Status);
    }
};
campaignsApi.campaignsByNameGet(campaignName, callback);
