# JS Snippets
Snippets prepared for NodeJS.

## Prepare test enviroment in this repo
Enter this catalog and run `npm install`

## Prepare test environment outside this repo
- Install NodeJS
- Init npm, `npm init`
- Install `@elasticemail/elasticemail-client`

  ```npm install @elasticemail/elasticemail-client```

## Set your API key
Every snippet reads the API key from the `ELASTICEMAIL_API_KEY` environment variable and stops with a message if it isn't set:

```
export ELASTICEMAIL_API_KEY=...
```

## Prepare a snippet
Replace other data if needed eg.: 
- your validated email address, 
- your email address to receive example email.
- template name
- campaign name
- ...etc

## Running a snippet
Run

`cd functions`

`node snippetFile.js`

## Snippets

Snippet | What it does | Guide
--- | --- | ---
[addCampaign](functions/addCampaign.js) | Create a campaign | [readme](functions/addCampaign.md)
[addContacts](functions/addContacts.js) | Add contacts | [readme](functions/addContacts.md)
[addList](functions/addList.js) | Create a contact list | [readme](functions/addList.md)
[addTemplate](functions/addTemplate.js) | Create a template | [readme](functions/addTemplate.md)
[deleteCampaign](functions/deleteCampaign.js) | Delete a campaign by name | [readme](functions/deleteCampaign.md)
[deleteContact](functions/deleteContact.js) | Delete one contact by email address | [readme](functions/deleteContact.md)
[deleteContacts](functions/deleteContacts.js) | Delete many contacts in one call | [readme](functions/deleteContacts.md)
[deleteList](functions/deleteList.js) | Delete a list by name | [readme](functions/deleteList.md)
[deleteTemplate](functions/deleteTemplate.js) | Delete a template by name | [readme](functions/deleteTemplate.md)
[exportContacts](functions/exportContacts.js) | Export contacts to a downloadable file | [readme](functions/exportContacts.md)
[loadCampaign](functions/loadCampaign.js) | Load a campaign by name | [readme](functions/loadCampaign.md)
[loadCampaignsStats](functions/loadCampaignsStats.js) | Load statistics for campaigns | [readme](functions/loadCampaignsStats.md)
[loadChannelsStats](functions/loadChannelsStats.js) | Load statistics for channels | [readme](functions/loadChannelsStats.md)
[loadList](functions/loadList.js) | Load a list by name | [readme](functions/loadList.md)
[loadStatistics](functions/loadStatistics.js) | Load account statistics | [readme](functions/loadStatistics.md)
[loadTemplate](functions/loadTemplate.js) | Load a template by name | [readme](functions/loadTemplate.md)
[sendBulkEmails](functions/sendBulkEmails.js) | Send a bulk email with merge fields | [readme](functions/sendBulkEmails.md)
[sendTransactionalEmails](functions/sendTransactionalEmails.js) | Send a transactional email | [readme](functions/sendTransactionalEmails.md)
[sendTransactionalEmailsWithAttachment](functions/sendTransactionalEmailsWithAttachment.js) | Send a transactional email with an attachment | [readme](functions/sendTransactionalEmailsWithAttachment.md)
[updateCampaign](functions/updateCampaign.js) | Update a campaign | [readme](functions/updateCampaign.md)
[uploadContacts](functions/uploadContacts.js) | Import contacts from a CSV file | [readme](functions/uploadContacts.md)
