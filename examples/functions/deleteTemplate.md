# Delete Template

This guide will walk you through steps of deleting existing template from your account using the NodeJS library. 

*Required Access Level: ModifyTemplates*

## What's a template?
When using Elastic Email you send emails to your contacts. A single template is a body of  email prepared and saved under given name. Till it's deleted it can be reused to send any number of emails.

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

Create an instance of TemplatesApi that will be used to delete a template.

```javascript
const templatesApi = new ElasticEmail.TemplatesApi();
```

To delete a template you need to specfiy it's name:

> Find out more by checking our API's documentation: https://elasticemail.com/developers/api-documentation/rest-api#operation/templatesByNameDelete

```javascript
const templateName = "hello_template";
```

Create a callback function that will be called when response comes back.

In case of error it will display error details, otherwise it will display a success message and name and template type of a template.

```javascript
const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log('Template deleted.');
    }
};
```

And finally, call `templatesByNameDelete` method from the API to delete a template: 

```javascript
templatesApi.templatesByNameDelete(templateName, callback);
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

const templatesApi = new ElasticEmail.TemplatesApi();
const templateName = 'My new template';
const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log('Template deleted.');
    }
};
templatesApi.templatesByNameDelete(templateName, callback);
```

## Run the code
Set your API key in the environment, then run the file:
```
export ELASTICEMAIL_API_KEY=...
node snippet.js
```
