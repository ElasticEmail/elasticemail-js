# Send Transactional Emails With Attachment

This guide will walk you through steps of sending a transactional email with an attachment using the NodeJS library. 

*Required Access Level: SendHttp*

## What's a transactional email?
When using Elastic Email you send emails to your contacts. One of options is to send transational emails. Transactional emails can be described that they are emails generated as a response to a particular actions done by the subscriber eg. account changes, purchase receipts, other confirmations.

A transactional email have a limit of 50 maximum recipients.

## Preparation
It's NodeJS code, so make sure you have it installed or download it here: https://nodejs.org/en/download/

Create a new JavaScript file `snippet.js` and open it in editor of your preference eg. Visual Studio Code (https://code.visualstudio.com/)

Put the file you want to attach, eg. `invoice.pdf`, in the same folder as `snippet.js`.

## Let's dig into the code

Put the below code to your file.

Load the library and the Node.js modules used to read the file and create an idempotency key:

```javascript
const ElasticEmail = require('@elasticemail/elasticemail-client');
const fs = require('fs');
const path = require('path');
const { randomUUID } = require('crypto');
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

Create an instance of EmailsApi that will be used to send a transactional email.

```javascript
const emailsApi = new ElasticEmail.EmailsApi();
```

Load the file you want to attach. The snippet looks for `invoice.pdf` next to your script and stops if it's not there.

```javascript
const invoicePath = path.join(__dirname, 'invoice.pdf');
if (!fs.existsSync(invoicePath)) {
    console.log(`Attachment file not found: ${invoicePath}. Skipping send.`);
    process.exit(0);
}
const binData = fs.readFileSync(invoicePath);
```

Next you need to specify email details:
- email recipients
- email content:
    - body parts – in HTML, PlainText or in both
    - from email – it needs to be your validated email address
    - email subject
    - attachments – file content encoded in base64 and the file name the recipient will see

> Find out more by checking our API's documentation: https://elasticemail.com/developers/api-documentation/rest-api#operation/emailsTransactionalPost

```javascript
const emailData = {
    Recipients: {
        To: ["johnsmith@domain.com"]
    },
    Content: {
        Body: [
            {
                ContentType: "HTML",
                Charset: "utf-8",
                Content: "<strong>Mail content.<strong>"
            },
            {
                ContentType: "PlainText",
                Charset: "utf-8",
                Content: "Mail content."
            }
        ],
        From: "myemail@domain.com",
        Subject: "Example transactional email with attachment",
        Attachments: [
            {
                BinaryContent: binData.toString('base64'),
                Name: "Invoice.pdf"
            }
        ]
    }
};
```

Create an idempotency key for this send. If the request times out, retry it with the same `emailData` and the same key, and the email won't be delivered twice.

```javascript
const idempotencyKey = randomUUID();
```

Create a callback function that will be called when response comes back.

In case of error it will display error details, otherwise it will display the `TransactionID` and the idempotency key.

```javascript
const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log(`Email sent. TransactionID: ${data.TransactionID}, Idempotency-Key: ${idempotencyKey}`);
    }
};
```

And finally, call `emailsTransactionalPost` method from the API to send an email: 

```javascript
emailsApi.emailsTransactionalPost(emailData, { idempotencyKey }, callback);
```


## The whole code to copy and paste:

```javascript
const ElasticEmail = require('@elasticemail/elasticemail-client');
const fs = require('fs');
const path = require('path');
const { randomUUID } = require('crypto');

const client = ElasticEmail.ApiClient.instance;

if (!process.env.ELASTICEMAIL_API_KEY) {
    console.error('Set the ELASTICEMAIL_API_KEY environment variable to your Elastic Email API key.');
    process.exit(1);
}
const apikey = client.authentications['apikey'];
apikey.apiKey = process.env.ELASTICEMAIL_API_KEY;

const emailsApi = new ElasticEmail.EmailsApi();

const invoicePath = path.join(__dirname, 'invoice.pdf');
if (!fs.existsSync(invoicePath)) {
    console.log(`Attachment file not found: ${invoicePath}. Skipping send.`);
    process.exit(0);
}
const binData = fs.readFileSync(invoicePath);

const emailData = {
    Recipients: {
        To: ["johnsmith@domain.com"]
    },
    Content: {
        Body: [
            {
                ContentType: "HTML",
                Charset: "utf-8",
                Content: "<strong>Mail content.<strong>"
            },
            {
                ContentType: "PlainText",
                Charset: "utf-8",
                Content: "Mail content."
            }
        ],
        From: "myemail@domain.com",
        Subject: "Example transactional email with attachment",
        Attachments: [
            {
                BinaryContent: binData.toString('base64'),
                Name: "Invoice.pdf"
            }
        ]
    }
};

const idempotencyKey = randomUUID();

const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log(`Email sent. TransactionID: ${data.TransactionID}, Idempotency-Key: ${idempotencyKey}`);
    }
};
emailsApi.emailsTransactionalPost(emailData, { idempotencyKey }, callback);
```

## Run the code
Set your API key in the environment, then run the file:
```
export ELASTICEMAIL_API_KEY=...
node snippet.js
```
