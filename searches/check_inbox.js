'use strict';

const perform = async (z, bundle) => {
  const params = { mailbox: bundle.inputData.mailbox };
  if (bundle.inputData.status) params.status = bundle.inputData.status;
  if (bundle.inputData.limit) params.limit = bundle.inputData.limit;

  const response = await z.request({
    url: 'https://api.multimail.dev/v1/emails/inbox',
    params,
  });
  return response.json.emails || [];
};

module.exports = {
  key: 'check_inbox',
  noun: 'Inbox',
  display: {
    label: 'Check Inbox',
    description: 'Check a mailbox inbox with optional status filtering.',
  },
  operation: {
    inputFields: [
      { key: 'mailbox', label: 'Mailbox', type: 'string', required: true },
      { key: 'status', label: 'Status Filter', type: 'string', required: false, helpText: 'Filter by status (e.g. unread, read)' },
      { key: 'limit', label: 'Limit', type: 'integer', required: false, helpText: 'Max results (default 25)' },
    ],
    perform,
    sample: {
      id: 'email_abc123',
      from: 'sender@example.com',
      subject: 'Hello',
      status: 'unread',
    },
  },
};
