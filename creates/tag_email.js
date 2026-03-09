'use strict';

const perform = async (z, bundle) => {
  const tags = bundle.inputData.tags.split(',').map((t) => t.trim());
  const response = await z.request({
    method: 'POST',
    url: `https://api.multimail.dev/v1/emails/${bundle.inputData.email_id}/tag`,
    body: { tags },
  });
  return response.json;
};

module.exports = {
  key: 'tag_email',
  noun: 'Email Tag',
  display: {
    label: 'Tag Email',
    description: 'Add tags to an email for organization and filtering.',
  },
  operation: {
    inputFields: [
      { key: 'email_id', label: 'Email ID', type: 'string', required: true },
      { key: 'tags', label: 'Tags', type: 'string', required: true, helpText: 'Comma-separated tags (e.g. "urgent, support, billing")' },
    ],
    perform,
    sample: {
      id: 'email_abc123',
      tags: ['urgent', 'support'],
    },
  },
};
