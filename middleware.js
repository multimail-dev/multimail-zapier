'use strict';

const addApiKey = (request, z, bundle) => {
  if (bundle.authData.apiKey) {
    request.headers['X-API-Key'] = bundle.authData.apiKey;
    request.headers['Content-Type'] = 'application/json';
  }
  return request;
};

const handleErrors = (response, z, bundle) => {
  if (response.status === 401) {
    throw new z.errors.Error(
      'The API Key you supplied is incorrect',
      'AuthenticationError',
      response.status
    );
  }
  if (response.status >= 400) {
    const body = response.json;
    throw new z.errors.Error(
      body.error || `Request failed with status ${response.status}`,
      'ApiError',
      response.status
    );
  }
  return response;
};

module.exports = {
  befores: [addApiKey],
  afters: [handleErrors],
};
