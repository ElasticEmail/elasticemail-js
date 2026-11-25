/* Initialization */
const ElasticEmail = require('@elasticemail/elasticemail-client');
const { randomUUID } = require('crypto');

const client = ElasticEmail.ApiClient.instance;

/* Read your API key from the ELASTICEMAIL_API_KEY environment variable */
if (!process.env.ELASTICEMAIL_API_KEY) {
    console.error('Set the ELASTICEMAIL_API_KEY environment variable to your Elastic Email API key.');
    process.exit(1);
}
const apikey = client.authentications['apikey'];
apikey.apiKey = process.env.ELASTICEMAIL_API_KEY;

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

/* One key per send. Reuse it only to retry this send with the same emailData. */
const idempotencyKey = randomUUID();

const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log(`Email sent. TransactionID: ${data.TransactionID}, Idempotency-Key: ${idempotencyKey}`);
    }
};
emailsApi.emailsPost(emailData, { idempotencyKey }, callback);
