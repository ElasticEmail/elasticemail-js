# Send Bulk Emails

This guide will walk you through steps of sending a bulk email using the NodeJS library. 

*Required Access Level: SendHttp*

## What's a bulk email?
When using Elastic Email you send emails to your contacts. One of options is to send bulk emails. Bulk email can be described as a single email message send to a large group at once.

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

Create an instance of EmailsApi that will be used to send a bulk email.

```javascript
const emailsApi = new ElasticEmail.EmailsApi();
```

First you need to specify email details:
- email recipients:
    - this example demostrates merge fields usage, for each recipient `{name}` will be changed to recipient's name
- email content:
    - body parts – in HTML, PlainText or in both
    - from email – it needs to be your validated email address
    - email subject

> Find out more by checking our API's documentation: https://elasticemail.com/developers/api-documentation/rest-api#operation/emailsPost

```javascript
const emailData = {
    Recipients: [
        {
            Email: "johnsmith@domain.com",
            Fields: {
                name: "John"
            }
        }
    ],
    Content: {
        Body: [
            {
                ContentType: "HTML",
                Charset: "utf-8",
                Content: "<strong>Hi {name}!<strong>"
            },
            {
                ContentType: "PlainText",
                Charset: "utf-8",
                Content: "Hi {name}!"
            }
        ],
        From: "myemail@domain.com",
        Subject: "Example email"
    }
};
```

Create a callback function that will be called when response comes back.

In case of error it will display error details, otherwise it will display a success messages.

```javascript
const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log('Email sent.');
    }
};
```

And finally, call `emailsPost` method from the API to send an email: 

```javascript
emailsApi.emailsPost(emailData, callback);
```


## The whole code to copy and paste:

```javascript
const ElasticEmail = require('@elasticemail/elasticemail-client');

const client = ElasticEmail.ApiClient.instance;

const apikey = client.authentications['apikey'];
apikey.apiKey = "YOUR_API_KEY";

const emailsApi = new ElasticEmail.EmailsApi();
const emailData = {
    Recipients: [
        {
            Email: "johnsmith@domain.com",
            Fields: {
                name: "John"
            }
        }
    ],
    Content: {
        Body: [
            {
                ContentType: "HTML",
                Charset: "utf-8",
                Content: "<strong>Hi {name}!<strong>"
            },
            {
                ContentType: "PlainText",
                Charset: "utf-8",
                Content: "Hi {name}!"
            }
        ],
        From: "myemail@domain.com",
        Subject: "Example email"
    }
};

const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log('Email sent.');
    }
};
emailsApi.emailsPost(emailData, callback);
```

## Run the code
```
node snippet.js
```
