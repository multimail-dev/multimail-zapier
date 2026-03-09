'use strict';

const perform = async (z, bundle) => {
  const response = await z.request({
    url: `https://api.multimail.dev/v1/emails/thread/${bundle.inputData.thread_id}`,
  });
  return [response.json];
};

module.exports = {
  key: 'get_thread',
  noun: 'Thread',
  display: {
    label: 'Get Email Thread',
    description: 'Retrieve a full email thread by thread ID.',
  },
  operation: {
    inputFields: [
      { key: 'thread_id', label: 'Thread ID', type: 'string', required: true },
    ],
    perform,
    sample: {
      thread_id: 'thread_abc123',
      emails: [
        { id: 'email_1', subject: 'Hello', from: 'a@example.com' },
        { id: 'email_2', subject: 'Re: Hello', from: 'b@example.com' },
      ],
    },
  },
};
