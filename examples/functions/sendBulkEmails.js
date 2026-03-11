/* Initialization */
const ElasticEmail = require('@elasticemail/elasticemail-client');

const client = ElasticEmail.ApiClient.instance;

/* Generate and use your API key */
const apikey = client.authentications['apikey'];
apikey.apiKey = "YOUR_API_KEY";

/**
 * Send bulk emails
 * Example api call that sends bulk merge email.
 */
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
