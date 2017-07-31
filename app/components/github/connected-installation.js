import Ember from 'ember';

const {
  computed,
  computed: { alias, mapBy },
  Component,
  get,
  getProperties,
  inject: { service }
} = Ember;

export default Component.extend({
  classNames: ['github-app-installation connected'],

  store: service(),

  githubAppInstallation: null,
  organization: null,
  project: null,

  githubRepos: alias('githubAppInstallation.githubRepos'),

  repoConnections: alias('project.projectGithubRepos'),
  connectedRepos: mapBy('repoConnections', 'githubRepo'),
  connectedRepoIds: mapBy('connectedRepos', 'id'),

  repos: computed('githubRepos', 'connectedRepoIds', function() {
    let { githubRepos, connectedRepoIds }
      = getProperties(this, 'githubRepos', 'connectedRepoIds');

    return githubRepos.map((githubRepo) => {
      return {
        model: githubRepo,
        isConnected: connectedRepoIds.indexOf(get(githubRepo, 'id')) !== -1
      };
    });
  }),

  actions: {
    connectRepo(githubRepo, project) {
      let projectGithubRepo = get(this, 'store').createRecord(
        'project-github-repo', { project, githubRepo }
      );
      return projectGithubRepo.save();
    },

    disconnectRepo(githubRepo, project) {
      let connection = get(this, 'repoConnections').find((c) => {
        return c.belongsTo('project').id() === get(project, 'id')
            && c.belongsTo('githubRepo').id() === get(githubRepo, 'id');
      });

      return connection.destroyRecord();
    }
  }
});
