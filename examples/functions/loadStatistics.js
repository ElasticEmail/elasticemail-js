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
 * Load statistics
 * Example api call that loads basic statistics.
 */

const statisticsApi = new ElasticEmail.StatisticsApi();
const fromDate = new Date('2022-01-17').toJSON();
const toDate = new Date('2022-04-17').toJSON();
const options = {
    to: toDate
};

const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log(JSON.stringify(data));
    }
};
statisticsApi.statisticsGet(fromDate, options, callback); 
