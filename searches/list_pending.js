'use strict';

const perform = async (z, bundle) => {
  const params = {};
  if (bundle.inputData.mailbox) params.mailbox = bundle.inputData.mailbox;

  const response = await z.request({
    url: 'https://api.multimail.dev/v1/emails/pending',
    params,
  });
  return response.json.emails || [];
};

module.exports = {
  key: 'list_pending',
  noun: 'Pending Email',
  display: {
    label: 'List Pending Emails',
    description: 'List emails pending human approval in gated oversight modes.',
  },
  operation: {
    inputFields: [
      { key: 'mailbox', label: 'Mailbox', type: 'string', required: false, helpText: 'Filter by mailbox (optional)' },
    ],
    perform,
    sample: {
      id: 'email_abc123',
      to: 'customer@example.com',
      subject: 'Draft reply',
      status: 'pending_approval',
    },
  },
};
