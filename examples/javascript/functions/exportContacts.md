# Export Contacts

This guide will walk you through the process of exporting selected contacts to downloadable file using the NodeJS library. 

*Required Access Level: Export*

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

In this example we will export contacts to a CSV file.

Create an instance of ContactsApi that will be used to export contacts.

```javascript
const contactsApi = new ElasticEmail.ContactsApi();
```

Create an options object:
- fileFormat - specify format in which file should be created, options are: "Csv" "Xml" "Json".
- emails - select contacts to export by providing array of emails
- fileName - you can specify file name of your choice

Other options:
- rule - eg. `rule=Status%20=%20Engaged` – Query used for filtering
- compressionFormat - "None" "Zip"

> Find out more by checking our API's documentation: https://elasticemail.com/developers/api-documentation/rest-api#operation/contactsExportPost

```javascript
const options = {
    fileFormat: 'Csv',
    emails: ["johnsmith@domain.com"],
    fileName: 'exported.csv'
};
```

Create a callback function that will be called when response comes back.

In case of error it will display error details, otherwise it will display a success messages and link to a file.

```javascript
const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log('Contacts exported');
        console.log('Link', data.Link);
    }
};
```

And finally, call `contactsExportPost` method from the API to export contacts: 

```javascript
contactsApi.contactsExportPost(options, callback);
```


## The whole code to copy and paste:

```javascript
const ElasticEmail = require('@elasticemail/elasticemail-client');

const client = ElasticEmail.ApiClient.instance;

const apikey = client.authentications['apikey'];
apikey.apiKey = "YOUR_API_KEY";

const contactsApi = new ElasticEmail.ContactsApi()
const options = {
    fileFormat: 'Csv',
    emails: ["johnsmith@domain.com"],
    fileName: 'exported.csv'
};

const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log('Contacts exported');
        console.log('Link', data.Link);
    }
};
contactsApi.contactsExportPost(options, callback);
```

## Run the code
```
node snippet.js
```
