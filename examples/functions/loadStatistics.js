/* Initialization */
const ElasticEmail = require('@elasticemail/elasticemail-client');

const client = ElasticEmail.ApiClient.instance;

/* Generate and use your API key */
const apikey = client.authentications['apikey'];
apikey.apiKey = "YOUR_API_KEY";

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
