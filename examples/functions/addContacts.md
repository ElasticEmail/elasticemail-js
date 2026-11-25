# Add Contacts

This guide will walk you through the process of adding new contacts to your account using the NodeJS library. 

*Required Access Level: ModifyContacts*

## What's contact?
When using Elastic Email, you send emails to contacts – recipients who receive your emails. Contacts can be grouped by created segments or lists.

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

Create an instance of ContactsApi that will be used to add contacts.

```javascript
const contactsApi = new ElasticEmail.ContactsApi();
```

Create an array with new contacts.

You can pass an array with up to 1000 contacts.

The `Email` field is mandatory, the rest is optional.

> Find out more by checking our API's documentation: https://elasticemail.com/developers/api-documentation/rest-api#operation/contactsPost

```javascript
const contacts = [{
    Email: "johnsmith@domain.com",
    FirstName: "John",
    LastName: "Smith"
}];
```

Specify an existing list name in options, otherwise contacts will be added to all contacts.

```javascript
const options = {
    listnames: ["New list"]
};
```

Create a callback function that will be called when response comes back.

In case of error it will display error details, otherwise it will display a success message.

```javascript
const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log('Contacts added.');
    }
};
```

And finally, call `contactsPost` method from the API to add contacts: 

```javascript
contactsApi.contactsPost(contacts, options, callback);
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

const contactsApi = new ElasticEmail.ContactsApi()
const contacts = [{
    Email: "johnsmith@domain.com",
    FirstName: "John",
    LastName: "Smith"
}];

const options = {
    listnames: ["New list"]
};

const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log('Contacts added.');
    }
};
contactsApi.contactsPost(contacts, options, callback);
```

## Run the code
Set your API key in the environment, then run the file:
```
export ELASTICEMAIL_API_KEY=...
node snippet.js
```
