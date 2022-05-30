# Load Statistics

This guide will walk you through steps of loading basic delivery statistics from your account using the NodeJS library. 

*Required Access Level: ViewReports*

## What statistics are returned?
When using Elastic Email you send emails to your contacts from that we create some statistics reports for you eg. number of emails sent, number of delivered messages, number of bounced messages, number of unsubscribed messages etc.

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

First you need to specify a date range:
- from date
- to date – optional

> Find out more by checking our API's documentation: https://elasticemail.com/developers/api-documentation/rest-api#operation/statisticsGet

```javascript
const fromDate = new Date('2022-01-17').toJSON();
const toDate = new Date('2022-04-17').toJSON();
const options = {
    to: toDate
};
```

Create a callback function that will be called when response comes back.

In case of error it will display error details, otherwise it will display a success message and stringified data.

```javascript
const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log(JSON.stringify(data));
    }
};
```

And finally, call `statisticsGet` method from the API to fetch statistics: 

```javascript
statisticsApi.statisticsGet(fromDate, options, callback); 
```


## The whole code to copy and paste:

```javascript
const ElasticEmail = require('@elasticemail/elasticemail-client');

const client = ElasticEmail.ApiClient.instance;

const apikey = client.authentications['apikey'];
apikey.apiKey = "YOUR_API_KEY";

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
```

## Run the code
```
node snippet.js
```
