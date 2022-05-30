/* Initialization */
const ElasticEmail = require('@elasticemail/elasticemail-client');

const client = ElasticEmail.ApiClient.instance;

/* Generate and use your API key */
const apikey = client.authentications['apikey'];
apikey.apiKey = "YOUR_API_KEY";

/**
 * Send transactional emails
 * Example api call that sends transactional email.
 * Limit of 50 maximum recipients.
 */

const emailsApi = new ElasticEmail.EmailsApi();
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
        Subject: "Example transactional email"
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
emailsApi.emailsTransactionalPost(emailData, callback);
