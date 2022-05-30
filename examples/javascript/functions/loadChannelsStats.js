/* Initialization */
const ElasticEmail = require('@elasticemail/elasticemail-client');

const client = ElasticEmail.ApiClient.instance;

/* Generate and use your API key */
const apikey = client.authentications['apikey'];
apikey.apiKey = "YOUR_API_KEY";

/**
 * Load channels stats
 * Example api call that loads a list of your channels' stats.
 */

const statisticsApi = new ElasticEmail.StatisticsApi();
const pageinationOptions = {
    limit: 0,
    offset: 0,
};
const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        data.forEach((channel) => {
            console.log(JSON.stringify(channel));
        });
    }
};
statisticsApi.statisticsChannelsGet(pageinationOptions, callback);
