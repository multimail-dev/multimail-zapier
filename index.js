const authentication = require('./authentication');
const { befores = [], afters = [] } = require('./middleware');

// Triggers
const newEmail = require('./triggers/new_email');

// Creates (Actions)
const sendEmail = require('./creates/send_email');
const replyEmail = require('./creates/reply_email');
const decideEmail = require('./creates/decide_email');
const tagEmail = require('./creates/tag_email');

// Searches
const readEmail = require('./searches/read_email');
const checkInbox = require('./searches/check_inbox');
const listPending = require('./searches/list_pending');
const getThread = require('./searches/get_thread');
const searchContacts = require('./searches/search_contacts');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  authentication,

  beforeRequest: [...befores],
  afterResponse: [...afters],

  triggers: {
    [newEmail.key]: newEmail,
  },

  searches: {
    [readEmail.key]: readEmail,
    [checkInbox.key]: checkInbox,
    [listPending.key]: listPending,
    [getThread.key]: getThread,
    [searchContacts.key]: searchContacts,
  },

  creates: {
    [sendEmail.key]: sendEmail,
    [replyEmail.key]: replyEmail,
    [decideEmail.key]: decideEmail,
    [tagEmail.key]: tagEmail,
  },

  resources: {},
};
