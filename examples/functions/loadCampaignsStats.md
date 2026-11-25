# Load Campaigns Statistics

This guide will walk you through steps of loading statistics for each campaign from your account using the NodeJS library. 

*Required Access Level: ViewChannels*

## What statistics are returned?
When using Elastic Email you send email campaigns to your contacts. From that we create statistics reports for you eg. number of emails sent, number of delivered messages,Number of opened messages, number of unsubscribed messages, number of clicked messages etc.

## Preparation
It's NodeJS code, so make sure you have it installed or download it here: https://nodejs.org/en/download/

Create a new JavaScript file `snippet.js` and open it in editor of your preference eg. Visual Studio Code (https://code.visualstudio.com/)

## Let's dig into the code

Put the below code to your file.

Load library using below line:

```javascript
const ElasticEmail = require('@elasticemail/elasticemail-client');
```

Get client instance:

```javascript
const client = ElasticEmail.ApiClient.instance;
```

Read your API key from the `ELASTICEMAIL_API_KEY` environment variable and stop with a clear message if it isn't set (remember to check a required access level):

```javascript
if (!process.env.ELASTICEMAIL_API_KEY) {
    console.error('Set the ELASTICEMAIL_API_KEY environment variable to your Elastic Email API key.');
    process.exit(1);
}
const apikey = client.authentications['apikey'];
apikey.apiKey = process.env.ELASTICEMAIL_API_KEY;
```

Create an instance of StatisticsApi that will be used to get basic send statistics.

```javascript
const statisticsApi = new ElasticEmail.StatisticsApi();
```

Campaigns statistics reponse is paginated you need to specfiy pagination options:
- limit – maximum returned items, `limit = 0` means to return everything till the end of the list
- offset – how many items should be skipped from begging

Eg. to return first 20 elements specify pagination options as follows
```
{
    limit: 20,
    offset: 0,
};
```

> Find out more by checking our API's documentation: https://elasticemail.com/developers/api-documentation/rest-api#operation/statisticsCampaignsByNameGet

Let's fetch everthing:

```javascript
const pageinationOptions = {
    limit: 0,
    offset: 0,
};
```

Create a callback function that will be called when response comes back.

In case of error it will display error details, otherwise it will display a success message and stringified data for each campaign.

```javascript
const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        data.forEach((campaign) => {
            console.log(JSON.stringify(campaign));
        });
    }
};
```

And finally, call `statisticsCampaignsGet` method from the API to fetch statistics: 

```javascript
statisticsApi.statisticsCampaignsGet(pageinationOptions, callback);
```


## The whole code to copy and paste:

```javascript
const ElasticEmail = require('@elasticemail/elasticemail-client');

const client = ElasticEmail.ApiClient.instance;

if (!process.env.ELASTICEMAIL_API_KEY) {
    console.error('Set the ELASTICEMAIL_API_KEY environment variable to your Elastic Email API key.');
    process.exit(1);
}
const apikey = client.authentications['apikey'];
apikey.apiKey = process.env.ELASTICEMAIL_API_KEY;

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
        data.forEach((campaign) => {
            console.log(JSON.stringify(campaign));
        });
    }
};
statisticsApi.statisticsCampaignsGet(pageinationOptions, callback);
```

## Run the code
Set your API key in the environment, then run the file:
```
export ELASTICEMAIL_API_KEY=...
node snippet.js
```
