'use strict';

const perform = async (z, bundle) => {
  const response = await z.request({
    method: 'POST',
    url: `https://api.multimail.dev/v1/emails/${bundle.inputData.email_id}/reply`,
    body: {
      body: bundle.inputData.body,
      mailbox: bundle.inputData.mailbox,
    },
  });
  return response.json;
};

module.exports = {
  key: 'reply_email',
  noun: 'Email Reply',
  display: {
    label: 'Reply to Email',
    description: 'Reply to an existing email.',
  },
  operation: {
    inputFields: [
      { key: 'email_id', label: 'Email ID', type: 'string', required: true, helpText: 'ID of the email to reply to' },
      { key: 'mailbox', label: 'From Mailbox', type: 'string', required: true },
      { key: 'body', label: 'Reply Body', type: 'text', required: true },
    ],
    perform,
    sample: {
      id: 'email_def456',
      status: 'queued',
      message: 'Reply queued for delivery',
    },
  },
};
