/* Initialization */
const ElasticEmail = require('@elasticemail/elasticemail-client');

const client = ElasticEmail.ApiClient.instance;

/* Generate and use your API key */
const apikey = client.authentications['apikey'];
apikey.apiKey = "YOUR_API_KEY";

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
