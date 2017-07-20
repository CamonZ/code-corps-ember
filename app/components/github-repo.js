import Ember from 'ember';
import recordsList from 'code-corps-ember/utils/records-list';

const {
  computed,
  Component,
  get
} = Ember;

export default Component.extend({
  classNames: ['github-repo'],
  tagName: 'li',

  isConnected: computed('githubRepo', 'project.projectGithubRepos.@each', function() {
    let githubRepo = get(this, 'githubRepo');
    let project = get(this, 'project');
    let projectGithubRepos = get(this, 'project.projectGithubRepos');
    if (projectGithubRepos) {
      return recordsList.includes(projectGithubRepos, githubRepo);
    }
  })
});
