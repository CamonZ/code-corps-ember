import {
  attribute, hasClass
} from 'ember-cli-page-object';

export default {
  scope: '.github-repo',

  connectButton: {
    scope: '[data-test-selector="github repo connect button"]'
  },

  isConnected: hasClass('github-repo--connected'),

  name: {
    scope: '[data-test-selector="github repo name"]'
  },

  removeLink: {
    scope: '[data-test-selector="github repo remove link"]'
  }
};
