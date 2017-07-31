import Ember from 'ember';
import ENV from 'code-corps-ember/config/environment';

const {
  Controller,
  computed: { alias, mapBy, setDiff },
  computed,
  get,
  getProperties,
  inject: { service }
} = Ember;

export default Controller.extend({
  githubAppUrl: ENV.github.appUrl,
  store: service(),

  organization: alias('project.organization'),
  installationConnections: alias('organization.organizationGithubAppInstallations'),

  userInstallations: alias('user.githubAppInstallations'),
  connectedInstallations: mapBy('installationConnections', 'githubAppInstallation'),

  unconnectedInstallations: computed('userInstallations', 'connectedInstallations', function() {
    let { userInstallations, connectedInstallations }
      = getProperties(this, 'userInstallations', 'connectedInstallations');

    if (!get(userInstallations, 'isFulfilled')) {
      return [];
    }

    let connectedInstallationIds
      = connectedInstallations.map((installation) => get(installation, 'id'));

    return userInstallations.filter((installation) => {
      return connectedInstallationIds.indexOf(get(installation, 'id')) === -1;
    });
  }),

  // unconnectedInstallations: setDiff('userInstallations', 'connectedInstallations'),

  actions: {
    /**
     * Connects an organization to a githubAppInstallation by creating a
     * through record called orgaizationGithubAppInstallation
     *
     * Triggered when user clicks a button to install the GitHub App
     *
     * @method createGithubAppInstallation
     * @param  {DS.Model} project A project record to initialize a new installation.
     */
    connect(organization, githubAppInstallation) {
      let store = get(this, 'store');
      let record = store.createRecord(
        'organizationGithubAppInstallation',
        { organization, githubAppInstallation }
      );

      return record.save();
    },

    disconnect(organizationGithubAppInstallation) {
      return organizationGithubAppInstallation.destroyRecord();
    }
  }
});
