/* Initialization */
const ElasticEmail = require('@elasticemail/elasticemail-client');
const fs = require('fs');
const path = require('path');
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
 * Send transactional emails with attachment
 * Example api call that sends a transactional email with a file attached.
 * Limit of 50 maximum recipients.
 * Required Access Level: SendHttp
 */

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
emailsApi.emailsTransactionalPost(emailData, { idempotencyKey }, callback);
