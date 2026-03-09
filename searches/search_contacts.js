'use strict';

const perform = async (z, bundle) => {
  const params = {};
  if (bundle.inputData.query) params.query = bundle.inputData.query;
  if (bundle.inputData.mailbox) params.mailbox = bundle.inputData.mailbox;

  const response = await z.request({
    url: 'https://api.multimail.dev/v1/contacts',
    params,
  });
  return response.json.contacts || [];
};

module.exports = {
  key: 'search_contacts',
  noun: 'Contact',
  display: {
    label: 'Search Contacts',
    description: 'Search the contact list.',
  },
  operation: {
    inputFields: [
      { key: 'query', label: 'Search Query', type: 'string', required: false },
      { key: 'mailbox', label: 'Mailbox', type: 'string', required: false },
    ],
    perform,
    sample: {
      email: 'contact@example.com',
      name: 'John Doe',
      mailbox: 'support@yourapp.multimail.dev',
    },
  },
};
