import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({
  classNames: ['github-repo'],
  classNameBindings: ['isConnected:github-repo--connected'],
  tagName: 'li',

  isConnected: null,
  name: null
});
