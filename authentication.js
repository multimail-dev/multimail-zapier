'use strict';

const test = (z, bundle) =>
  z.request({ url: 'https://api.multimail.dev/v1/account' });

module.exports = {
  type: 'custom',
  fields: [
    {
      key: 'apiKey',
      label: 'API Key',
      required: true,
      helpText: 'Your MultiMail API key (starts with mm_live_)',
    },
  ],
  test,
  connectionLabel: '{{json.account.name}}',
};
