/* Initialization */
const ElasticEmail = require('@elasticemail/elasticemail-client');

const client = ElasticEmail.ApiClient.instance;

/* Generate and use your API key */
const apikey = client.authentications['apikey'];
apikey.apiKey = "YOUR_API_KEY";

/**
 * Delete Campaign
 * Example api call that deletes an existing campaign.
 */
const campaignsApi = new ElasticEmail.CampaignsApi()
const campaignName = "hello campaign";

const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log('Campaign deleted.');
    }
};
campaignsApi.campaignsByNameDelete(campaignName, callback);
