# Add Template

This guide will walk you through the process of adding a new template to your account using the NodeJS library. 

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

Generate and use your API key (remember to check a required access level): 

```javascript
const apikey = client.authentications['apikey'];
apikey.apiKey = "YOUR_API_KEY";
```

Create an instance of TemplatesApi that will be used to create a new template.

```javascript
const templatesApi = new ElasticEmail.TemplatesApi();
```

Create an object with details about new template:
- Name – name of your template by which it can be identified and used
- Subject – specify default subject for this template
- Body – specify acctual body content eg. in HTML, PlainText or both
- TemplateScope – specify scope, "Personal" template won't be shared, "Global" template can be shared with your sub accounts.

> Find out more by checking our API's documentation: https://elasticemail.com/developers/api-documentation/rest-api#operation/templatesPost

```javascript
const template = {
    Name: 'My new template',
    Subject: 'Default subject',
    Body: [{
        ContentType: 'HTML',
        Charset: 'utf-8',
        Content: 'My template'
    }],
    TemplateScope: 'Personal',
};
```

Create a callback function that will be called when response comes back.

In case of error it will display error details, otherwise it will display a success message and name and template type of newly created template.

```javascript
const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log('Template name', data.Name);
        console.log('Template type', data.TemplateType);
    }
};
```

And finally, call `templatesPost` method from the API to create a template: 

```javascript
templatesApi.templatesPost(template, callback);
```


## The whole code to copy and paste:

```javascript
const ElasticEmail = require('@elasticemail/elasticemail-client');

const client = ElasticEmail.ApiClient.instance;

const apikey = client.authentications['apikey'];
apikey.apiKey = "YOUR_API_KEY";

const templatesApi = new ElasticEmail.TemplatesApi();
const template = {
    Name: 'My new template',
    Subject: 'Default subject',
    Body: [{
        ContentType: 'HTML',
        Charset: 'utf-8',
        Content: 'My template'
    }],
    TemplateScope: 'Personal',
};
const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log('Template name', data.Name);
        console.log('Template type', data.TemplateType);
    }
};
templatesApi.templatesPost(template, callback);
```

## Run the code
```
node snippet.js
```
