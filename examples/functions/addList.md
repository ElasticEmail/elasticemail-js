# Add List

This guide will walk you through the process of adding a new list of contacts to your account using the NodeJS library. 

*Required Access Level: ModifyContacts*

## What's a list?
When using Elastic Email, you send emails to contacts – recipients who receive your emails. Contacts can be grouped by created segments or lists. Segments add contacts automatically when specfied conditions are met, and contacts on lists are managed manually.

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

Create an instance of ListsApi that will be used to create a new list.

```javascript
const listsApi = new ElasticEmail.ListsApi();
```

Create an object with details about new list. Only `ListName` is required. 

You can also define if to allow unsubscription from list and pass an emails array of existing contacts on your account to add them to list during list creation. 

> Find out more by checking our API's documentation: https://elasticemail.com/developers/api-documentation/rest-api#operation/listsPost

```javascript
const listData = {
    ListName: "Best contacts",
    AllowUnsubscribe: true,
    Emails: ["johnsmith@domain.com"]
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
        console.log('List added.');
    }
};
```

And finally, call `listsPost` method from the API to create a list: 

```javascript
listsApi.listsPost(listData, callback);
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

const listsApi = new ElasticEmail.ListsApi();
const listData = {
    ListName: "Best contacts",
    AllowUnsubscribe: true,
    Emails: ["johnsmith@domain.com"]
};

const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log('List added.');
    }
};
listsApi.listsPost(listData, callback);
```

## Run the code
Set your API key in the environment, then run the file:
```
export ELASTICEMAIL_API_KEY=...
node snippet.js
```
