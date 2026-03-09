'use strict';

const perform = async (z, bundle) => {
  const payload = {
    to: bundle.inputData.to,
    subject: bundle.inputData.subject,
    body: bundle.inputData.body,
    mailbox: bundle.inputData.mailbox,
  };
  if (bundle.inputData.cc) payload.cc = bundle.inputData.cc;
  if (bundle.inputData.bcc) payload.bcc = bundle.inputData.bcc;
  if (bundle.inputData.reply_to) payload.reply_to = bundle.inputData.reply_to;

  const response = await z.request({
    method: 'POST',
    url: 'https://api.multimail.dev/v1/emails/send',
    body: payload,
  });
  return response.json;
};

module.exports = {
  key: 'send_email',
  noun: 'Email',
  display: {
    label: 'Send Email',
    description: 'Send a new email through MultiMail.',
  },
  operation: {
    inputFields: [
      { key: 'mailbox', label: 'From Mailbox', type: 'string', required: true, helpText: 'Mailbox address to send from' },
      { key: 'to', label: 'To', type: 'string', required: true, helpText: 'Recipient email address' },
      { key: 'subject', label: 'Subject', type: 'string', required: true },
      { key: 'body', label: 'Body', type: 'text', required: true, helpText: 'Email body (plain text or HTML)' },
      { key: 'cc', label: 'CC', type: 'string', required: false },
      { key: 'bcc', label: 'BCC', type: 'string', required: false },
      { key: 'reply_to', label: 'Reply-To', type: 'string', required: false },
    ],
    perform,
    sample: {
      id: 'email_abc123',
      status: 'queued',
      message: 'Email queued for delivery',
    },
  },
};
