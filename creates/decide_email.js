'use strict';

const perform = async (z, bundle) => {
  const payload = { decision: bundle.inputData.decision };
  if (bundle.inputData.reason) payload.reason = bundle.inputData.reason;

  const response = await z.request({
    method: 'POST',
    url: `https://api.multimail.dev/v1/emails/${bundle.inputData.email_id}/decide`,
    body: payload,
  });
  return response.json;
};

module.exports = {
  key: 'decide_email',
  noun: 'Email Decision',
  display: {
    label: 'Approve or Reject Email',
    description: 'Approve or reject a pending email in a gated oversight mode.',
  },
  operation: {
    inputFields: [
      { key: 'email_id', label: 'Email ID', type: 'string', required: true },
      { key: 'decision', label: 'Decision', type: 'string', required: true, choices: { approve: 'Approve', reject: 'Reject' } },
      { key: 'reason', label: 'Reason', type: 'string', required: false },
    ],
    perform,
    sample: {
      id: 'email_abc123',
      status: 'approved',
      message: 'Email approved',
    },
  },
};
