'use strict';

const perform = async (z, bundle) => {
  const response = await z.request({
    url: 'https://api.multimail.dev/v1/emails/inbox',
    params: {
      mailbox: bundle.inputData.mailbox,
      status: 'unread',
      limit: '25',
    },
  });
  return response.json.emails || [];
};

module.exports = {
  key: 'new_email',
  noun: 'Email',
  display: {
    label: 'New Email Received',
    description: 'Triggers when a new email is received in a mailbox.',
  },
  operation: {
    inputFields: [
      {
        key: 'mailbox',
        label: 'Mailbox',
        type: 'string',
        required: true,
        helpText: 'The mailbox address to monitor (e.g. support@yourapp.multimail.dev)',
      },
    ],
    perform,
    sample: {
      id: 'email_abc123',
      from: 'sender@example.com',
      to: 'support@yourapp.multimail.dev',
      subject: 'Hello from Zapier',
      body: 'This is a sample email body.',
      status: 'unread',
      created_at: '2026-01-01T00:00:00Z',
    },
  },
};
