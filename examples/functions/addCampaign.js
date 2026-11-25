/* Initialization */
const ElasticEmail = require('@elasticemail/elasticemail-client');

const client = ElasticEmail.ApiClient.instance;

/* Read your API key from the ELASTICEMAIL_API_KEY environment variable */
if (!process.env.ELASTICEMAIL_API_KEY) {
    console.error('Set the ELASTICEMAIL_API_KEY environment variable to your Elastic Email API key.');
    process.exit(1);
}
const apikey = client.authentications['apikey'];
apikey.apiKey = process.env.ELASTICEMAIL_API_KEY;

/**
 * Add Campaign
 * Example api call that creates a new campaign.
 * Send will be triggered immediately or postponed, depending on given options.
 */
const campaignsApi = new ElasticEmail.CampaignsApi()

const campaign = {
    Name: 'hello campaign',
    Recipients: {
        ListNames: ["my list name"],
        SegmentNames: null,
    },
    Content: [{
        From: 'myemail@domain.com',
        ReplyTo: 'myemail@domain.com',
        TemplateName: "hello_template",
        Subject: 'Hello'
    }],
    Status: "Draft"
};

const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log('Campaign name', data.Name);
        console.log('Campaign status', data.Status);
    }
};
campaignsApi.campaignsPost(campaign, callback);
