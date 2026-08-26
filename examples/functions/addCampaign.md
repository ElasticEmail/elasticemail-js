# Add Campaign

This guide will walk you through the process of creating your first campaign using the NodeJS library. 

*Required Access Level: ModifyCampaigns*

## What's a campaign?
When using Elastic Email, when you send an email to any group of contacts we call that a "campaign".

To send a campaign you need a template (which becomes the email body itself) and you need contacts (the recipients who receive the email).

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

Create an instance of CampaignsApi that will be used to create a campaign.

```javascript
const campaignsApi = new ElasticEmail.CampaignsApi()
```


Create an example campaign object:
- Name: defines campaign name by which you can identify it later
- Recipients: define your audience
- Conent: define your message details
- Status: define status in which campaign should be created

> Find out more by checking our API's documentation: https://elasticemail.com/developers/api-documentation/rest-api#operation/campaignsPost

Send will be triggered immediately or postponed, depending on given options. 
Because we define `Status` as `Draft`, so in this case it will be postponed and campaign will be added to drafts.


```javascript
const campaign = {
    Name: 'hello campaign',
    Recipients: {
        ListNames: ["my list name"],
        SegmentNames: null,
    },
    Content: [{
        From: 'myemail@domain.com',
        ReplyTo: 'myemail@domain.com',
        TemplateName: "hello_template",
        Subject: 'Hello'
    }],
    Status: "Draft"
};
```

Create a callback function that will be called when response comes back.

In case of error it will display error details, otherwise it will display a success message and chosen details about newly created campaign.

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

And finally, call `campaignsPost` method from the API to create a campaign: 

```javascript
campaignsApi.campaignsPost(campaign, callback);
```


## The whole code to copy and paste:

```javascript
/* Initialization */
const ElasticEmail = require('@elasticemail/elasticemail-client');

const client = ElasticEmail.ApiClient.instance;

/* Generate and use your API key */
const apikey = client.authentications['apikey'];
apikey.apiKey = "YOUR_API_KEY";

const campaignsApi = new ElasticEmail.CampaignsApi()

const campaign = {
    Name: 'hello campaign',
    Recipients: {
        ListNames: ["my list name"],
        SegmentNames: null,
    },
    Content: [{
        From: 'myemail@domain.com',
        ReplyTo: 'myemail@domain.com',
        TemplateName: "hello_template",
        Subject: 'Hello'
    }],
    Status: "Draft"
};

const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log('Campaign name', data.Name);
        console.log('Campaign status', data.Status);
    }
};
campaignsApi.campaignsPost(campaign, callback);
```

## Run the code
```
node snippet.js
```
