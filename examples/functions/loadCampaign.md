# Load Campaign

This guide will walk you through the process of loading details about an existing campaign in your account using the NodeJS library. Example details you can get are like: name, status, recipients, subject etc.

*Required Access Level: ViewCampaigns*

## What's a campaign?
When using Elastic Email, when you send an email to any group of contacts we call that a "campaign".

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

Create an instance of CampaignsApi that will be used to create a campaign.

```javascript
const campaignsApi = new ElasticEmail.CampaignsApi()
```


The only thing you need to specify is a campaign name

> Find out more by checking our API's documentation: https://elasticemail.com/developers/api-documentation/rest-api#operation/campaignsGet


```javascript
const campaignName = "example";
```

Create a callback function that will be called when response comes back.

In case of error it will display error details, otherwise it will display a success message and name and status of given campaign.

```javascript
const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log('Campaign name', data.Name);
        console.log('Campaign status', data.Status);
    }
};
```

And finally, call `campaignsByNameGet` method from the API to get a campaign: 

```javascript
campaignsApi.campaignsByNameGet(campaignName, callback);
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
```

## Run the code
Set your API key in the environment, then run the file:
```
export ELASTICEMAIL_API_KEY=...
node snippet.js
```
