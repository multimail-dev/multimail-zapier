'use strict';

const perform = async (z, bundle) => {
  const response = await z.request({
    url: `https://api.multimail.dev/v1/emails/${bundle.inputData.email_id}`,
  });
  return [response.json];
};

module.exports = {
  key: 'read_email',
  noun: 'Email',
  display: {
    label: 'Read Email',
    description: 'Read a specific email by ID.',
  },
  operation: {
    inputFields: [
      { key: 'email_id', label: 'Email ID', type: 'string', required: true },
    ],
    perform,
    sample: {
      id: 'email_abc123',
      from: 'sender@example.com',
      to: 'support@yourapp.multimail.dev',
      subject: 'Sample email',
      body: 'This is the email body.',
      status: 'read',
    },
  },
};
