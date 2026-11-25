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
