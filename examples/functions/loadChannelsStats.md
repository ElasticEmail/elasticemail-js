# Load Channels Statistics

This guide will walk you through steps of loading statistics for each channel from your account using the NodeJS library. 

*Required Access Level: ViewChannels*

## What statistics are returned?
When sending emails using Elastic Email with SMTP or API, Elastic Email organizes your email flow by channels. Statistics reports for each channel are being created eg. number of emails sent, number of delivered messages,Number of opened messages, number of unsubscribed messages, number of clicked messages etc.

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

Generate and use your API key (remember to check a required access level): 

```javascript
const apikey = client.authentications['apikey'];
apikey.apiKey = "YOUR_API_KEY";
```

Create an instance of StatisticsApi that will be used to get basic send statistics.

```javascript
const statisticsApi = new ElasticEmail.StatisticsApi();
```

Channels statistics reponse is paginated you need to specfiy pagination options:
- limit – maximum returned items, `limit = 0` means to return everything till the end of the list
- offset – how many items should be skipped from begging

Eg. to return first 20 elements specify pagination options as follows
```
{
    limit: 20,
    offset: 0,
};
```

> Find out more by checking our API's documentation: https://elasticemail.com/developers/api-documentation/rest-api#operation/statisticsChannelsGet

Let's fetch everthing:

```javascript
const pageinationOptions = {
    limit: 0,
    offset: 0,
};
```

Create a callback function that will be called when response comes back.

In case of error it will display error details, otherwise it will display a success message and stringified data for each channel.

```javascript
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
```

And finally, call `statisticsChannelsGet` method from the API to fetch statistics: 

```javascript
statisticsApi.statisticsChannelsGet(pageinationOptions, callback);
```


## The whole code to copy and paste:

```javascript
const ElasticEmail = require('@elasticemail/elasticemail-client');

const client = ElasticEmail.ApiClient.instance;

const apikey = client.authentications['apikey'];
apikey.apiKey = "YOUR_API_KEY";

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
```

## Run the code
```
node snippet.js
```
