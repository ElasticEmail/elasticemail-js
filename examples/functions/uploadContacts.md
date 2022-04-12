# Upload Contacts

This guide will walk you through the process of adding new contacts to your account, by uploading them from a CSV file, using the NodeJS library. 

*Required Access Level: ModifyContacts*

## What's a contact?
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

Generate and use your API key (remember to check a required access level): 

```javascript
const apikey = client.authentications['apikey'];
apikey.apiKey = "YOUR_API_KEY";
```

In this example we will load a CSV file that contains a list of contacts.

We will use built-in `fs` api for handling files in NodeJS.

```javascript
const fs = require('fs');
```

Create an instance of ContactsApi that will be used to upload contacts.

```javascript
const contactsApi = new ElasticEmail.ContactsApi();
```

Create a stream to read data from a file.

```javascript
const readStream = fs.createReadStream('./files/contacts.csv');
```

The simplest CSV file requires only one column `Email`, eg.:

```
Email
john@johnsmith.com
```

> Find out more by checking our API's documentation: https://elasticemail.com/developers/api-documentation/rest-api#operation/contactsImportPost

Create an options object where we will pass a file data, it's encoding and optionaly a list name to which contacts should be added, otherwise contacts will be added to all contacts.

```javascript
const options = {
    listName: "New list",
    encodingName: 'utf-8',
    file: readStream,
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

And finally, call `contactsImportPost` method from the API to upload contacts: 

```javascript
contactsApi.contactsImportPost(options, callback);
```


## The whole code to copy and paste:

```javascript
const ElasticEmail = require('@elasticemail/elasticemail-client');

const client = ElasticEmail.ApiClient.instance;

const apikey = client.authentications['apikey'];
apikey.apiKey = "YOUR_API_KEY";

const fs = require('fs');
const contactsApi = new ElasticEmail.ContactsApi()

const readStream = fs.createReadStream('./files/contacts.csv');

const options = {
    listName: "New list",
    encodingName: 'utf-8',
    file: readStream,
};


const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log('Contacts added.');
    }
};
contactsApi.contactsImportPost(options, callback);
```

## Run the code
```
node snippet.js
```
