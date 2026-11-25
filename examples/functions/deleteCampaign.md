# Delete Campaign

This guide will walk you through steps to delete an existing campaign from your account.

*Required Access Level: ModifyCampaigns*

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

Create an instance of CampaignsApi that will be used to delete a campaign.

```javascript
const campaignsApi = new ElasticEmail.CampaignsApi()
```


The only thing you need to specify is a campaign name

> Find out more by checking our API's documentation: https://elasticemail.com/developers/api-documentation/rest-api#operation/campaignsByNameDelete


```javascript
const campaignName = "example";
```

Create a callback function that will be called when response comes back.

In case of error it will display error details, otherwise it will display a success messages.

```javascript
const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log('Campaign deleted.');
    }
};
```

And finally, call `campaignsByNameDelete` method from the API to delete a campaign: 

```javascript
campaignsApi.campaignsByNameDelete(campaignName, callback);
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
```

## Run the code
Set your API key in the environment, then run the file:
```
export ELASTICEMAIL_API_KEY=...
node snippet.js
```
